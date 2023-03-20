let search = document.getElementById("search-btn");
let res = JSON.parse(localStorage.getItem("data"));
let arr = [];
let push = document.querySelector(".cards-row");
let arr2 = [];
search.addEventListener("input", (e) => {
  arr.push(e.data);
  for (el of arr) {
    if (el === null) {
      arr.pop();
      arr.pop();
      if (arr.length == 0) {
        getrows(push);
      }
    }
  }
  let r = arr.join("");
  for (el of res) {
    let res = el.title.split("");
    let arr = [];
    for (els of res) {
      arr.push(els);
      let y = arr.join("");
      let r1 = y.toLocaleLowerCase();
      let r2 = r.toLocaleLowerCase();
      if (r1 == r2) {
        arr2.push(el);
      }
    }
  }
  for (el of arr2) {
    push.innerHTML = getRow(el);
  }
});
