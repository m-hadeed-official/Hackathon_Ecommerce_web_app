export function addCategory(obj, target) {
  target.innerHTML += `<button
          class="px-3 py-1.5 rounded-3xl  border-2 border-emerald-600 hover:bg-emerald-600 font-semibold text-emerald-900 shrink-0 focus:bg-emerald-800 focus:text-white"
          onclick="filterP(${obj.id})"
          >
          ${obj.name}
        </button>`;
}

export async function fetchAndAddCategories(url, container) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    data.categories.forEach((element) => {
      addCategory(element, container);
    });
  } catch {
    container.innerHTML = `<span class= "italic text-red-800">Error Fetching Categories</span>`;
  }
}
