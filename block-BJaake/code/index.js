let newsurl = `https://api.spaceflightnewsapi.net/v3/articles?_limit=30`;
let data = fetch(newsurl).then((res) => res.json());

let select = document.querySelector("select");

function createUI(n) {
  let section = document.querySelector("section");

  let article = document.createElement("article");
  article.classList.add("flex");
  let img = document.createElement("img");
  img.src = n.imageUrl;
  let div = document.createElement("div");
  let h2 = document.createElement("h2");
  h2.innerText = n.newsSite;
  let p = document.createElement("p");
  p.innerText = n.title;
  let a = document.createElement("a");
  a.innerText = "Read More";
  a.href = n.url;
  div.append(h2, p, a);
  article.append(img, div);
  section.appendChild(article);
}
data.then((newsinfo) => newsinfo.forEach((data) => createUI(data)));
function handleClick(e) {
  console.log(e.target.value);

  let section = document.querySelector("section");
  section.innerHTML = "";
  data.then((newsinfo) => {
    newsinfo.forEach((data) => {
      console.log(data.newsSite);
      if (data.newsSite === e.target.value) {
        createUI(data);
      }
    });
  });
}
select.addEventListener("click", handleClick);
