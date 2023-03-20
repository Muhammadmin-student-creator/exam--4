let casrd = document.querySelector(".cards-row");

function getRow(el) {
  return `
    <div class="card-row post">
        <div class="card-row-l">
            <img src="../images/bitc.svg" alt="">
        </div>
        <div class="card-row-r">
            <h2>${el.category.name}</h2>
            <h1>${el.title}</h1>
            <p>${el.description}</p>
        </div>
    </div>
    `;
}
let category_id = localStorage.getItem("id-cat");

function getrows(l) {
  l.innerHTML =
    '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
  request.get("post").then((res) => {
    l.innerHTML = "";
    let data = res.data.data;
    let r = JSON.stringify(data);
    localStorage.setItem("data", r);
    for (el of data) {
      l.innerHTML += getRow(el);
    }
  });
}

getrows(casrd);
