// Add your code here
function submitData(name, email) {
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email }),
    };
  
    let request = fetch("http://localhost:3000/users", configurationObject)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => {
        document.getElementById("error").textContent = error.message;
      });
  
    return request;
  }
  
