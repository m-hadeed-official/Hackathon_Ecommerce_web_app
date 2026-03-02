export function createCard(obj, target) {
  // Card Container
  const card = document.createElement("div");
  card.className =
    "flex flex-col justify-between gap-5 px-3 py-2 md:px-4 md:py-3.5 lg:px-7 lg:py-5 bg-sky-700 rounded-xl max-w-[400px] min-w-[150px]";
  card.id = "card";

  // ================= TOP SECTION =================
  const topSection = document.createElement("div");
  topSection.className = "flex flex-col gap-2";

  // Image Wrapper
  const imgWrapper = document.createElement("div");
  imgWrapper.className = "h-[250px] rounded-2xl overflow-hidden mb-3";

  // Image
  const img = document.createElement("img");
  img.src = obj.img;
  img.alt = "Product image";
  img.className = "w-full h-full";

  imgWrapper.appendChild(img);

  // Heading
  const heading = document.createElement("h1");
  heading.className =
    "text-2xl md:text-2xl lg:text-[1.8rem] font-semibold max-block-[calc(2lh+10px)] overflow-y-scroll scrollbar-none pb-1";
  heading.textContent = obj.heading;

  // Description
  const description = document.createElement("p");
  description.className =
    "text-md md:text-lg lg:text-xl max-block-[4lh] pb-1 overflow-y-scroll scrollbar-none";
  description.textContent = obj.description;

  // Append top elements
  topSection.append(imgWrapper, heading, description);

  // ================= BOTTOM SECTION =================
  const bottomSection = document.createElement("div");
  bottomSection.className = "flex flex-col gap-1";

  // Price & Rating Row
  const priceRating = document.createElement("div");
  priceRating.className = "flex justify-between";

  // Price
  const price = document.createElement("span");
  price.className = "text-red-200 text-3xl";
  price.textContent = "$" + obj.price;

  // Rating
  const rating = document.createElement("span");
  rating.className = "text-yellow-200 text-lg";
  rating.textContent = `Rating : ${obj.rating}`;

  priceRating.append(price, rating);

  // Add to Cart Button
  const addToCart = document.createElement("button");
  addToCart.className = "bg-amber-400 rounded-xl mt-3 py-2 hover:bg-amber-200";
  addToCart.textContent = "Add to cart";
  addToCart.onclick = () => window.addToCart(obj);

  // Add to Wishlist Button
  const addToWishlistbtn = document.createElement("button");
  addToWishlistbtn.className =
    "bg-amber-600 hover:bg-amber-500 rounded-xl mt-3 py-2";
  addToWishlistbtn.textContent = "Add to whishlist";
  addToWishlistbtn.onclick = () => window.addToWishlist(obj);

  // Append bottom elements
  bottomSection.append(priceRating, addToCart, addToWishlistbtn);

  // ================= BUILD CARD =================
  card.append(topSection, bottomSection);

  // Append to body (or any container)
  target.appendChild(card);
}

export async function fetchAndAddProducts(
  url,
  container,
  filterId = 0,
  searchKeywords = "",
) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    container.innerHTML = ``;
    console.log(data.products);

    if (!filterId && !searchKeywords) {
      data.products.forEach((element) => {
        createCard(element, container);
      });
    } else if (filterId > 0) {
      let filteredData = data.products.filter(
        (element) => element.categoryId == filterId,
      );
      filteredData.forEach((element) => createCard(element, container));
    } else if (searchKeywords) {
      let filteredData = data.products.filter((element) =>
        element.heading.toLowerCase().includes(searchKeywords.toLowerCase()),
      );
      console.log(filteredData);

      filteredData.forEach((element) => createCard(element, container));
    }
  } catch {
    container.innerHTML = `<span class= "italic text-red-800">Error Fetching products</span>`;
  }
}
