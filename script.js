import { createCard } from "./modules/products.js";
import { fetchAndAddCategories } from "./modules/category.js";
import { fetchAndAddProducts } from "./modules/products.js";
import { addCartProducts } from "./modules/cart.js";
import { addWishListProducts } from "./modules/wishlist.js";

// urls
let productsUrl =
  "https://api.mockfly.dev/mocks/28c7e519-c845-4e77-a466-396485649116/products";
let categoryUrl =
  "https://api.mockfly.dev/mocks/28c7e519-c845-4e77-a466-396485649116/categories";

let userNameDisplay = document.getElementById("userNameDisplay");

let users = JSON.parse(localStorage.getItem("users"));
let [currentUser] = users.filter((user) => user.isLoggedIn == true);

if (currentUser) {
  console.log(currentUser);

  userNameDisplay.innerText = currentUser.userName;
}

window.logOut = () => {
  users.forEach((element) => {
    if (element.id == currentUser.id) {
      element.isLoggedIn = false;
      localStorage.setItem("users", JSON.stringify(users));
      window.location.reload();
    }
  });
};

// cart products
let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

//whishlist Products
let wishListProducts =
  JSON.parse(localStorage.getItem("wishListProducts")) || [];

//header
let headerMenuIcon = document.getElementById("headerMenuIcon");
let navMenuContainer = document.getElementById("navMenuContainer");
let cardsContainer = document.getElementById("cardsContainer");
let searchBar = document.getElementById("searchBar");

//cart Counter
let cartCounter = document.getElementById("cartCounter");
window.updateCartCounter = function (arr) {
  cartCounter.innerText = arr.length;
};

//wishlist Counter
let wishListCounter = document.getElementById("wishListCounter");
window.updateWishListCounter = function (arr) {
  wishListCounter.innerText = arr.length;
};

let cartCardContainer = document.getElementById("cartCardContainer");
let cartTotalContainer = document.getElementById("cartTotalContainer");

let cartWrapper = document.getElementById("cartWrapper");

//category
let categoryContainer = document.getElementById("categoryContainer");
headerMenuIcon.addEventListener("click", () => {
  headerMenuIcon.classList.toggle("text-red-500");

  navMenuContainer.classList.toggle("hidden");
  navMenuContainer.classList.add("flex");
  navMenuContainer.classList.toggle("flex-col");
  navMenuContainer.classList.add("gap-2");

  navMenuContainer.classList.toggle("bg-blue-300");
  navMenuContainer.classList.toggle("px-3");
  navMenuContainer.classList.toggle("py-2");
  navMenuContainer.classList.toggle("absolute");

  navMenuContainer.classList.toggle("top-[110%]");
  navMenuContainer.classList.toggle("right-[10px]");
  navMenuContainer.classList.toggle("z-3");
});

fetchAndAddCategories(categoryUrl, categoryContainer);
fetchAndAddProducts(productsUrl, cardsContainer);
updateCartCounter(cartProducts);
updateWishListCounter(wishListProducts);

//filter prducts by category
function filterProducts(id) {
  console.log("ran");
  fetchAndAddProducts(productsUrl, cardsContainer, id);

  // update category ui
}
window.filterP = function (id) {
  return filterProducts(id);
};

//end

// filter by search
searchBar.addEventListener("input", (e) => {
  console.log(e.target.value);

  fetchAndAddProducts(productsUrl, cardsContainer, 0, e.target.value);
});

//end

//hide and reveal cart

window.hideCart = function () {
  console.log("added");

  cartWrapper.classList.add("hidden");
};
window.revealCart = function () {
  console.log("revealde");

  cartWrapper.classList.remove("hidden");
  addCartProducts(cartProducts, cartCardContainer);

  calcSummary(cartProducts, cartTotalContainer);
};

window.calcSummary = function (arr, target) {
  console.log(arr);

  let total = 0;
  if (arr.length) {
    arr.forEach((element) => {
      total += element.price * element.quantity;
    });
    console.log(total);
  }
  total = Math.floor(total);
  target.innerText = `Total : ${total}`;
};

// cart logic
window.addToCart = function (obj) {
  let productContains = cartProducts.some((element) => element.id == obj.id);
  console.log(cartProducts);

  if (!productContains) {
    cartProducts.push(obj);
    updateCartCounter(cartProducts);

    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  } else {
    console.log("product exist");
  }
};

//quantity cahnger
window.quntityChanger = function (obj, operation) {
  // let [currentObj] = cartProducts.filter((element) => element.id == id);

  let currentObjIndex = cartProducts.indexOf(obj);
  if (operation == "+") {
    cartProducts[currentObjIndex].quantity++;
  } else if (operation == "-" && cartProducts[currentObjIndex].quantity > 1) {
    cartProducts[currentObjIndex].quantity--;
  }

  addCartProducts(cartProducts, cartCardContainer);

  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

  calcSummary(cartProducts, cartTotalContainer);
};

//delete from cart
window.deleteFromCart = function (obj) {
  let currentObjIndex = cartProducts.indexOf(obj);
  cartProducts.splice(currentObjIndex, 1);
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

  calcSummary(cartProducts, cartTotalContainer);
  updateCartCounter(cartProducts);
};

// delete from wishlist
window.deleteFromWishlist = function (obj) {
  let currentObjIndex = cartProducts.indexOf(obj);
  cartProducts.splice(currentObjIndex, 1);
  localStorage.setItem("wishlist", JSON.stringify(cartProducts));

  calcSummary(cartProducts, cartTotalContainer);
  updateCartCounter(cartProducts);
};

// cart counter

// wishListProducts
window.deleteFromWishList = function (obj) {
  let currentObjIndex = wishListProducts.indexOf(obj);
  wishListProducts.splice(currentObjIndex, 1);
  localStorage.setItem("wishListProducts", JSON.stringify(wishListProducts));

  //   calcSummary(cartProducts, cartTotalContainer);
  calcSummary(wishListProducts, cartTotalContainer);
  //   updateCartCounter(cartProducts);
  updateWishListCounter(wishListProducts);
};

window.revealWishList = function () {
  console.log("revealde");

  cartWrapper.classList.remove("hidden");
  addWishListProducts(wishListProducts, cartCardContainer);
  updateWishListCounter(wishListProducts);
  calcSummary(wishListProducts, cartTotalContainer);
};

// add
window.addToWishlist = function (obj) {
  let productContains = wishListProducts.some(
    (element) => element.id == obj.id,
  );
  console.log(wishListProducts);

  if (!productContains) {
    wishListProducts.push(obj);
    updateWishListCounter(wishListProducts);

    localStorage.setItem("wishListProducts", JSON.stringify(wishListProducts));
  } else {
    console.log("product exist");
  }
};

//remove
window.deleteFromWishlist = function (obj) {
  let currentObjIndex = wishListProducts.indexOf(obj);
  wishListProducts.splice(currentObjIndex, 1);
  localStorage.setItem("wishListProducts", JSON.stringify(wishListProducts));

  calcSummary(wishListProducts, cartTotalContainer);
  updateWishListCounter(wishListProducts);
};
