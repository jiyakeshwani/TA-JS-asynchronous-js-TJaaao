function network(url, fn) {
  let xml = new XMLHttpRequest();

  xml.open("GET", url);

  xml.onload = () => fn(JSON.parse(xml.response));

  xml.onerror = function () {
    console.error("Something went wrong");
  };

  xml.send();
}

// github finder

let input = document.querySelector("input");
let img = document.querySelector(".user-image");
let name = document.querySelector("h2");
let username = document.querySelector("h3");
let follower = document.querySelector(".Followers");
let following = document.querySelector(".Following");

function followingDisplay(url, root) {
  network(url, function (followingList) {
    let firstFive = followingList.slice(0, 5);
    firstFive.forEach((info) => {
      let li = document.createElement("li");
      let img = document.createElement("img");
      img.src = info.avatar_url;
      img.alt = info.name;
      li.append(img);
      root.append(li);
    });
  });
}

function displayUI(data) {
  img.src = data.avatar_url;
  img.alt = data.name;
  name.innerText = data.name;
  username.innerText = "@" + data.login;
  followingDisplay(
    `https://api.github.com/users/${data.login}/followers`,
    follower
  );
  followingDisplay(
    `https://api.github.com/users/${data.login}/following`,
    following
  );
}

function handleChange(event) {
  if (event.keyCode === 13 && input.value) {
    let username = input.value;
    const url = "https://api.github.com/users/";
    network(url + username, displayUI);
    input.value = "";
  }
}

input.addEventListener("keyup", handleChange);

// random cat

let catImage = document.querySelector(".cat-image");
let btn = document.querySelector("button");

function getRandomCat() {
  network(
    `https://api.thecatapi.com/v1/images/search?limit=1&size=full`,
    function (cat) {
      catImage.src = cat[0].url;
    }
  );
}
btn.addEventListener("click", getRandomCat);
