let category_id = JSON.parse(localStorage.getItem("categ"));
let se = document.querySelector(".name");
const df = document.getElementById("click");

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
function get(name) {
  return `
    <div class="container bgc-io">
      <h1>${name}</h1>
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </h4>
      <p>Blog > ${name}</p>
    </div>
    `;
}

function getCategory() {
  for (el of category_id) {
    se.innerHTML += getRow(el);
    df.innerHTML = get(el.category.name)
  }
}

getCategory();
