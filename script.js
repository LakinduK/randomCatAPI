var baseUrl = "https://api.giphy.com/v1/gifs/random";
var apiKey = "df9tybhWThxuIrJohKKHYaXwvBonDmIV";
const generateButton = document.querySelector(".generate-new-cat");
const gifDisplay = document.querySelector(".gif-display");
const apiData = `${baseUrl}?api_key=${apiKey}&tag=cats&rating=g`; //Template Literal String

//Get Gif as a re-usable function
const getGifs = () => {
  // Fetch API
  fetch(apiData)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const gifUrl = data.data.image_original_url; //Gets Gif URL
      gifDisplay.setAttribute("src", gifUrl); // Sets src for img
    })
    // Error Handling
    .catch(function (err) {
      console.warn("Something went wrong.", err);
    });
};

//Get Gifs on load
window.onload = function () {
  getGifs();
};

//Get Gifs on Button Click
generateButton.addEventListener("click", () => getGifs());
