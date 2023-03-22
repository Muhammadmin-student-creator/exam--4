const names = document.getElementById("name");
const description = document.getElementById("description");
const file = document.getElementById("file");
const category = document.getElementById("category");
const tags = document.getElementById("teg");
const form = document.getElementById("madal-form");
const set = document.querySelector(".cards-my");
const addBtn = document.getElementById("add");
let modal = document.getElementById("modal");
let modals = document.getElementById("modals");
const namess = document.getElementById("names");
const descriptions = document.getElementById("descriptions");
const files = document.getElementById("files");
const categoryss = document.getElementById("categorys");
const tagss = document.getElementById("tegs");
const forms = document.getElementById("madals-form");

function getImage(id) {
  requestImages.get(`${id}`).then((ol) => {
    console.log(ol.data);
  });
}

function getRow(el, elf, res) {
  return `
  <div class="card-row post">
    <div class="card-row-l img-23">
      <img src="https://blog-backend.up.railway.app/upload/${res}" alt="" />
    </div>
    <div class="card-row-r">
      <div class="change">
        <button
          data-bs-toggle="modal"
          data-bs-target="#example"
          onclick="edits('${el._id}')"
        >
          <img src="../images/edit.svg" alt="" />
        </button>
        <button onclick="deletes('${el._id}')">
          <img src="../images/delete.svg" alt="" />
        </button>
      </div>

      <div>
        <h2>${el.category.name}</h2>
        <h1>${el.title}</h1>
        <p>${el.description}</p>
        <p>${elf}</p>
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
        let model = el.photo.name.split(".");
        let photoId = el.photo._id;
        let ress = photoId + "." + model[1];
        let tags = el.tags;
        let gh = getRow(el, tags, ress);
        set.innerHTML += gh;
        // console.log(gh);
      }
    }
  });
}

mypost();

function trim(s) {
  let arr = [];
  let tagsSplit = s.value.split(",");
  let string = tagsSplit.join(" ");
  let trimed = string.trim();
  let res = trimed.split(" ");
  for (el of res) {
    if (el != "") {
      arr.push(el);
    }
  }
  return arr;
}

function deleteMalumot() {
  names.value = "";
  description.value = "";
  category.value = "";
  tags.value = "";
}

function deletes(id) {
  request.delete(`post/${id}`).then((res) => {
    alert("Deleted");
    mypost();
    deleteMalumot();
  });
}

function edits(id) {
  namess.value = "...loading";
  request.get(`post/${id}`).then((res) => {
    let data = res.data;
    console.log(data);
    namess.value = data.title;
    forms.addEventListener("submit", (e) => {
      e.preventDefault();
      let rt = {
        title: namess.value,
      };
      edit.put(`post/${id}`, rt).then((res) => {
        console.log(res);
        alert("Post is edited");
        mypost();
        bootstrap.Modal.getInstance(modals).hide();
      });
    });
  });
}

// add

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = category.value;
  let categorys = 1;
  if (value == 1) {
    categorys = "63de2fc268d03b5daea7c6a6";
  } else if (value == 2) {
    categorys = "63de6eb268d03b5daea7dbca";
  } else if (value == 3) {
    categorys = "63deced968d03b5daea7ec6c";
  } else if (value == 4) {
    categorys = "63decf1468d03b5daea7ec6f";
  }
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
      category: categorys,
      tags: arr,
    };
    request.post("post", rt).then((res) => {
      console.log(res);
      mypost();
      alert("Post is added");
      bootstrap.Modal.getInstance(modal).hide();
      deleteMalumot();
    });
  });
});
