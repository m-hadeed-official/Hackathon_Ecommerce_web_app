let registerForm = document.getElementById("registerForm");

let users = JSON.parse(localStorage.getItem("users")) || [];

registerForm.addEventListener("submit", (e) => {
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

  //   confirm user
  let userExists = false;
  users.forEach((element) => {
    if (element.email == user.email) {
      userExists = true;
    }
  });

  // set user

  if (!userExists) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    //   clear form
    e.target.reset();
  } else {
    console.log("email exists");
  }
});
