const form = document.getElementById("form");
const imgcontainer = document.getElementById("img-container");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   console.log(e);
  let query = e.target.input.value;
  search(query);
});

async function search(queryParam) {
  let response = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${queryParam}&client_id=_yyXBx_Z41nrX0ItYX2TcUQUYVDo_6Lv4gT0hwxwhTI`
  );
  //   console.log(response);

  let data = await response.json();

  let img = document.createElement("img");
  img.src = data.results[0].urls.raw;
  imgcontainer.appendChild(img);
}
