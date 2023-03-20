const set = document.querySelector(".cards-my");
const addBtn = document.getElementById("add");
let modal = document.querySelector("#exampleModal");
function getRow(el) {
  return `
      <div class="card-row post">
          <div class="card-row-l">
              <img src="../images/bitc.svg" alt="">
          </div>
          <div class="card-row-r">
              <div class="change">
              <button onclick="edits('${el._id}')">
                <img src="../images/edit.svg" alt="">
              </button>
              <button onclick="deletes('${el._id}')">
                <img src="../images/delete.svg" alt="">
              </button>
              </div>
               
              <div> 
                <h2>${el.category.name}</h2>
                <h1>${el.title}</h1>
                <p>${el.description}</p>
              </div>
          </div>
      </div>
      `;
}

function mypost() {
  set.innerHTML =
    '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> ';

  request.get("post/user").then((res) => {
    let data = res.data.data;
    set.innerHTML = "";
    if (data.length == 0) {
      set.innerHTML = "There will be your posts";
    } else {
      for (el of data) {
        set.innerHTML += getRow(el);
      }
    }
  });
}

mypost();



function deletes(id) {
  request.delete(`post${id}`).then((res) => {
    alert("Deleted");
  });
}

// add
const names = document.getElementById("name");
const description = document.getElementById("description");
const file = document.getElementById("file");
const category = document.getElementById("category");
const tags = document.getElementById("teg");
const form = document.getElementById("madal-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let arr = [];
  let tagsSplit = tags.value.split(",");
  let string = tagsSplit.join(" ");
  let trimed = string.trim();
  let res = trimed.split(" ");
  for (el of res) {
    if (el != "") {
      arr.push(el);
    }
  }
  let form = new FormData();
  form.append("file", file.files[0]);
  requestImage.post("upload", form).then((res) => {
    console.log(res.data._id);
    let rt = {
      title: names.value,
      description: description.value,
      photo: res.data._id,
      category: "63de2fc268d03b5daea7c6a6",
      tags: arr,
    };
    request.post("post", rt).then((res) => {
      console.log(res);
      alert("Post is added");
      mypost();
    });
  });
});

addBtn.addEventListener("click", () => {});
