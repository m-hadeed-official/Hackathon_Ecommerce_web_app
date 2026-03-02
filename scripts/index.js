let loginForm = document.getElementById("loginForm");

console.log(loginForm);

let users = JSON.parse(localStorage.getItem("localUsers")) || [];

function registerUser(e) {
  e.preventDefault();

  let formData = new FormData(e.currentTarget);
  formData.get("userName");
  formData.get("email");
  formData.get("password");

  let data = Object.fromEntries(formData.entries());

  let user = {
    userName: data.userName,
    email: data.email,
    password: data.password,
  };

  users.push(user);
  localStorage.setItem("localUsers", JSON.stringify(users));

  //   clear form
  e.target.reset();
}
function loginUser() {
  e.preventDefault();

  let formData = new FormData(e.currentTarget);
  formData.get("email");
  formData.get("password");

  let data = Object.fromEntries(formData.entries());
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});
