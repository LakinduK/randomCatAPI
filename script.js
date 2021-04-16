var request = new XMLHttpRequest();
var baseUrl = "https://api.giphy.com/v1/gifs/random";
var apiKey = "df9tybhWThxuIrJohKKHYaXwvBonDmIV";
request.open("GET", baseUrl + "?api_key=" + apiKey + "&tag=cats&rating=g");

request.onload = function () {
  var response = request.response;
  var parseData = JSON.parse(response);

  console.log(parseData);

  var originalUrl = parseData.data.images.original.url;
  console.log(originalUrl);

  //view image
  var gif = document.createElement("img");
  gif.setAttribute("src", originalUrl);
  document.body.appendChild(gif);
};

request.send();
