async function getAdvice() {
    try {
      // API URL
      const url = "https://api.adviceslip.com/advice?language=pt-br";
      
      // Making the GET request
      const response = await fetch(url);
      
      // Checking if the request was successful
      if (response.ok) {
        // Parsing the response as JSON
        const data = await response.json();
        // Extracting the advice
        const advice = data.slip.advice;
        // Displaying the advice
        document.getElementById("advice").innerText = advice;
      } else {
        console.error("Error accessing the API.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Calling the function
  getAdvice();