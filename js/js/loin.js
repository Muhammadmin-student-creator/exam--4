const user = document.getElementById("user");
const password = document.getElementById("password");
const forms = document.getElementById("forms");

forms.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = {
    username: user.value,
    password: password.value,
  };
  request.post("auth/login", data).then((res) => {
    if (res.data.success) {
      localStorage.setItem("TOKEN", res.data.token);
      localStorage.setItem(TOKEN, res.data.token);
      location.href = "../index.html";
    }
  });
});
