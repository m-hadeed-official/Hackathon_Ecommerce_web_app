export function addCartCard(obj, target) {
  const card = document.createElement("div");
  card.className =
    "card flex gap-2 bg-amber-400 px-3 py-2 rounded-xl max-h-[130px]";

  // Image Container
  const imgContainer = document.createElement("div");
  imgContainer.className = "flex-1 min-w-[80px] rounded-xl overflow-hidden";

  const img = document.createElement("img");
  img.className = "w-full h-full";
  img.src = obj.img;
  img.alt = "";

  imgContainer.appendChild(img);

  // Content Container
  const contentContainer = document.createElement("div");
  contentContainer.className = "flex flex-col gap-2 py-2 flex-2";

  const heading = document.createElement("h3");
  heading.className =
    "font-bold text-xl md:text-2xl flex-2 overflow-y-scroll scrollbar-none";
  heading.textContent = obj.heading;

  const price = document.createElement("span");
  price.className = "font-semibold text-xl flex-1";
  price.textContent = obj.price;

  contentContainer.appendChild(heading);
  contentContainer.appendChild(price);

  // Quantity + Delete Container
  const qntyDelContainer = document.createElement("div");
  qntyDelContainer.className =
    "flex-1 flex flex-col gap-2 items-center justify-center";

  const qntyWrapper = document.createElement("div");
  qntyWrapper.className = "flex gap-1";

  const minusBtn = document.createElement("button");
  minusBtn.className = "w-5 text-center text-md bg-emerald-200 font-bold";
  minusBtn.textContent = "-";

  const quantityDisplay = document.createElement("div");
  quantityDisplay.className = "w-7 text-center text-md";
  quantityDisplay.textContent = obj.quantity;

  const plusBtn = document.createElement("button");
  plusBtn.className = "w-5 text-center text-md bg-emerald-200 font-bold";
  plusBtn.textContent = "+";

  // Proper event listeners
  minusBtn.addEventListener("click", () => {
    quntityChanger(obj, "-");
  });

  plusBtn.addEventListener("click", () => {
    quntityChanger(obj, "+");
  });

  qntyWrapper.appendChild(minusBtn);
  qntyWrapper.appendChild(quantityDisplay);
  qntyWrapper.appendChild(plusBtn);

  // Delete button
  const delDiv = document.createElement("div");
  delDiv.className = "md:text-2xl md:mt-3 text-red-800 hover:text-red-600";

  const trashIcon = document.createElement("i");
  trashIcon.className = "fa-solid fa-trash";
  trashIcon.id = "delete";

  delDiv.appendChild(trashIcon);

  card.addEventListener("click", (e) => {
    if (e.target.id == "delete") {
      deleteFromCart(obj);
      e.currentTarget.remove();
      console.log();
    }
  });

  qntyDelContainer.appendChild(qntyWrapper);
  qntyDelContainer.appendChild(delDiv);

  // Append everything
  card.appendChild(imgContainer);
  card.appendChild(contentContainer);
  card.appendChild(qntyDelContainer);

  target.appendChild(card);
}

export function addCartProducts(arr, target) {
  target.innerHTML = ``;
  if (arr.length) {
    arr.forEach((element) => {
      addCartCard(element, target);
    });
  } else {
    target.innerHTML = `<h3 class="italic text-red-500 text-xl" >Cart Empty...</h3>`;
  }
}
