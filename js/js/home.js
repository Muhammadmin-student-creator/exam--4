let cards = document.querySelector(".Catagory-cards");
function getCard(el) {
  return `
    <div  onclick="getId('${el._id}')" class="cards post">
        <div>
            <div class="img-1">
                <img src="images/Icon.png" alt="" />
            </div>
        </div>
        <h1>${el.name}</h1>
        <p>${el.description}</p>
    </d>
    `;
} 
let ids = null;
function getId(id) {
  ids = id;
  getcat();
}

function get(el) {
  el.innerHTML =
    '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> ';
  request.get("category").then((res) => {
    el.innerHTML = "";
    let data = res.data.data;
    for (els of data) {
      el.innerHTML += getCard(els);
    }
  });
}
let ress = [];
function getcat() {
  request.get("post").then((res) => {
    let data = res.data.data;
    ress = [];
    for (el of data) {
      if (ids == el.category._id) {
        ress.push(el);
      }
    }
    let json = JSON.stringify(ress);
    localStorage.setItem("categ", json);
    location.href = "pages/category.html";
  });
}

get(cards);

// nav

let navbar = document.getElementById("navbar-responsive");
function openNavbar() {
  console.log(navbar);
  navbar.style.top = "0";
}
function closeNavbar() {
  navbar.style.top = "-100%";
}

let nav = document.querySelector(".nav-l");
nav.innerHTML = "";

let test = localStorage.getItem(TOKEN);

if (test == undefined) {
  nav.innerHTML = '<img src="images/logo.svg" alt="" />';
} else {
  nav.innerHTML = '<a class="hellos" href="pages/mypost.html">{ My posts</a>';
} 
