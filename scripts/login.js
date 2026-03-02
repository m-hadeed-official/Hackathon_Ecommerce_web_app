let loginForm = document.getElementById("loginForm");
let users = JSON.parse(localStorage.getItem("users")) || [];
// let users = [{ email: "123@gmail.com", password: 123 }];
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(e.currentTarget);
  formData.get("email");
  formData.get("password");

  let data = Object.fromEntries(formData.entries());

  //data validation here

  users.forEach((element) => {
    if (element.email == data.email && element.password == data.password) {
      console.log("Logged in Successfully");
      e.target.reset();

      element.isLoggedIn = true;
      localStorage.setItem("users", JSON.stringify(users));
      window.open("../index.html", "_self");
    } else if (
      element.email == data.email &&
      element.password != data.password
    ) {
      console.log("Incorrect Password");
    } else {
      console.log("User Does not Exist");
    }
  });
});
