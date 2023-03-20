const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const user = document.getElementById("user");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (confirm.value == password.value) {
    let data = {
      first_name: firstname.value,
      last_name: lastname.value,
      username: user.value,
      password: password.value,
    };
    request.post("auth/register", data).then((res) => {
      let data = res.data.token;
      localStorage.setItem(TOKEN, data);
      location.href = "../index.html";
    });
  } else {
    alert("Confirm and password are not same");
  }
});
