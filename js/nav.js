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
  nav.innerHTML = '<img src="../images/logo.svg" alt="" />';
} else {
  nav.innerHTML = '<a class="hellos" href="mypost.html">{ My posts</a>;';
}
