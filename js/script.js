const searchInput = document.querySelector("#search");
const searchButton = document.querySelector("#search_button");
const gifContainer = document.querySelector(".gif-container");

const gif = document.createElement("img");

const noGIFsFoundMessage = document.createElement("p");
noGIFsFoundMessage.textContent = "No GIFs found :(.";

let sParameter, url;

url =
  "https://api.giphy.com/v1/gifs/translate?api_key=ISqXk4wJHYuq1KZFDkvtcPOIUJfwzRmA&s=";

searchButton.addEventListener("click", () => {
  if (searchInput.value != "") {
    sParameter = searchInput.value;
    fetch(url + sParameter, {
      mode: "cors",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        gifContainer.innerHTML = "";
        gif.src = response.data.images.original.url;
        gif.alt = sParameter;
        gifContainer.appendChild(gif);
      })
      .catch(function () {
        gifContainer.appendChild(noGIFsFoundMessage);
      });
  }
});