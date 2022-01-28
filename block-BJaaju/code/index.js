let apiUrl = (query) =>
  `https://api.unsplash.com/search/photos/?query=${query}&client_id=Udt4jmKXzrpIDRSUnspqXGSs9wtgDeQA5QUeV42lwA4`;

function fetchData(url, successHandler) {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", url);

  xhr.onload = () => successHandler(JSON.parse(xhr.response));

  xhr.onerror = function () {
    console.error("Something went wrong");
  };

  xhr.send();
}
let input = document.querySelector("input");
let ul = document.querySelector("ul");

function createUI(imgs) {
  ul.innerHTML = "";
  imgs.results.forEach((img) => {
    let li = document.createElement("li");
    let image = document.createElement("img");
    image.src = img.urls.thumb;
    ul.append(li, image);
  });
}

function search(event) {
  if (event.keyCode === 13 && input.value) {
    fetchData(apiUrl(event.target.value), createUI);
    input.value = "";
  }
}
input.addEventListener("keyup", search);
