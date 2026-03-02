import { createCard } from "./modules/products.js";
import { fetchAndAddCategories } from "./modules/category.js";
import { fetchAndAddProducts } from "./modules/products.js";
import { addCartProducts } from "./modules/cart.js";
import { addWishListProducts } from "./modules/wishlist.js";

// urls
let products = [
  {
    id: 1,
    heading: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 89.99,
    quantity: 1,
    img: "https://picsum.photos/seed/p1/400/300",
    categoryId: 1,
    rating: 4.6,
  },
  {
    id: 2,
    heading: "Smart Watch",
    description: "Track your fitness and notifications with this smart watch.",
    price: 129.99,
    quantity: 1,
    img: "https://picsum.photos/seed/p2/400/300",
    categoryId: 1,
    rating: 4.4,
  },
  {
    id: 3,
    heading: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and clear sound.",
    price: 49.99,
    quantity: 1,
    img: "https://picsum.photos/seed/p3/400/300",
    categoryId: 1,
    rating: 4.3,
  },
  {
    id: 4,
    heading: "Men's Casual T-Shirt",
    description: "Comfortable cotton t-shirt for everyday wear.",
    price: 19.99,
    quantity: 1,
    img: "https://picsum.photos/seed/p4/400/300",
    categoryId: 2,
    rating: 4.1,
  },
  {
    id: 5,
    heading: "Women's Denim Jacket",
    description: "Stylish denim jacket for all seasons.",
    price: 59.99,
    quantity: 1,
    img: "https://picsum.photos/seed/p5/400/300",
    categoryId: 2,
    rating: 4.7,
  },
  {
    id: 6,
    heading: "Running Shoes",
    description: "Lightweight running shoes with breathable material.",
    price: 79.99,
    quantity: 1,
    img: "https://picsum.photos/seed/p6/400/300",
    categoryId: 2,
    rating: 4.5,
  },
  {
    id: 7,
    heading: "Non-Stick Frying Pan",
    description: "Durable non-stick pan for easy cooking.",
    price: 29.99,
    quantity: 1,
    img: "https://picsum.photos/seed/p7/400/300",
    categoryId: 3,
    rating: 4.2,
  },
  {
    id: 8,
    heading: "Electric Kettle",
    description: "Fast boiling electric kettle with auto shut-off.",
    price: 39.99,
    quantity: 1,
    img: "https://picsum.photos/seed/p8/400/300",
    categoryId: 3,
    rating: 4.4,
  },
  {
    id: 9,
    heading: "Blender Machine",
    description: "Multi-speed blender for smoothies and juices.",
    price: 69.99,
    quantity: 1,
    img: "https://picsum.photos/seed/p9/400/300",
    categoryId: 3,
    rating: 4.3,
  },
  {
    id: 10,
    heading: "Modern JavaScript Guide",
    description: "Comprehensive guide to modern JavaScript development.",
    price: 24.99,
    quantity: 1,
    img: "https://picsum.photos/seed/p10/400/300",
    categoryId: 4,
    rating: 4.8,
  },
  {
    id: 11,
    heading: "React for Beginners",
    description: "Learn React step by step with practical examples.",
    price: 29.99,
    quantity: 1,
    img: "https://picsum.photos/seed/p11/400/300",
    categoryId: 4,
    rating: 4.6,
  },
  {
    id: 12,
    heading: "CSS Mastery",
    description: "Advanced techniques for professional CSS styling.",
    price: 22.99,
    quantity: 1,
    img: "https://picsum.photos/seed/p12/400/300",
    categoryId: 4,
    rating: 4.2,
  },
  {
    id: 13,
    heading: "Yoga Mat",
    description: "Non-slip yoga mat with comfortable cushioning.",
    price: 34.99,
    quantity: 1,
    img: "https://picsum.photos/seed/p13/400/300",
    categoryId: 5,
    rating: 4.5,
  },
  {
    id: 14,
    heading: "Dumbbell Set",
    description: "Adjustable dumbbells for strength training.",
    price: 99.99,
    quantity: 1,
    img: "https://picsum.photos/seed/p14/400/300",
    categoryId: 5,
    rating: 4.7,
  },
  {
    id: 15,
    heading: "Skipping Rope",
    description: "Durable skipping rope for cardio workouts.",
    price: 14.99,
    quantity: 1,
    img: "https://picsum.photos/seed/p15/400/300",
    categoryId: 5,
    rating: 4.0,
  },
  {
    id: 16,
    heading: "Gaming Mouse",
    description: "High precision gaming mouse with RGB lighting.",
    price: 45.99,
    quantity: 1,
    img: "https://picsum.photos/seed/p16/400/300",
    categoryId: 1,
    rating: 4.6,
  },
  {
    id: 17,
    heading: "Formal Shirt",
    description: "Slim fit formal shirt for office wear.",
    price: 39.99,
    quantity: 1,
    img: "https://picsum.photos/seed/p17/400/300",
    categoryId: 2,
    rating: 4.3,
  },
  {
    id: 18,
    heading: "Cookware Set",
    description: "Complete cookware set for modern kitchens.",
    price: 149.99,
    quantity: 1,
    img: "https://picsum.photos/seed/p18/400/300",
    categoryId: 3,
    rating: 4.8,
  },
  {
    id: 19,
    heading: "Data Structures Book",
    description: "Understand data structures with clear examples.",
    price: 27.99,
    quantity: 1,
    img: "https://picsum.photos/seed/p19/400/300",
    categoryId: 4,
    rating: 4.4,
  },
  {
    id: 20,
    heading: "Resistance Bands",
    description: "Set of resistance bands for home workouts.",
    price: 19.99,
    quantity: 1,
    img: "https://picsum.photos/seed/p20/400/300",
    categoryId: 5,
    rating: 4.2,
  },
];
let category = [
  { id: 0, name: "All" },
  { id: 1, name: "Electronics" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Home & Kitchen" },
  { id: 4, name: "Books" },
  { id: 5, name: "Fitness" },
];

let userNameDisplay = document.getElementById("userNameDisplay");

let users = JSON.parse(localStorage.getItem("users")) || [];
let [currentUser] = users.filter((user) => user.isLoggedIn == true);
//this

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

fetchAndAddCategories(category, categoryContainer);
fetchAndAddProducts(products, cardsContainer);
updateCartCounter(cartProducts);
updateWishListCounter(wishListProducts);

//filter prducts by category
function filterProducts(id) {
  console.log("ran");
  fetchAndAddProducts(products, cardsContainer, id);

  // update category ui
}
window.filterP = function (id) {
  return filterProducts(id);
};

//end

// filter by search
searchBar.addEventListener("input", (e) => {
  console.log(e.target.value);

  fetchAndAddProducts(products, cardsContainer, 0, e.target.value);
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
