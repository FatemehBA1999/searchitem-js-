const input = document.querySelector("#search-product");
const productDiv = document.querySelector(".product");
// input.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });
//change: 1.change , 2.focus

const products = [
  { title: "node js course" },
  { title: "mastering react.js course" },
  { title: "advanced javascript(js) course" },
  { title: "git-git hub course" },
];
const filters = {
  searchItem: "",
};

function renderProducts(_products, _filters) {
  const filteredProducts = _products.filter((element) => {
    return element.title
      .toLowerCase()
      .includes(_filters.searchItem.toLowerCase());
  });
  console.log(filteredProducts);
  productDiv.innerHTML = "";
  filteredProducts.forEach((item) => {
    const p = document.createElement("p");
    p.textContent = item.title;
    productDiv.appendChild(p);
  });
}
renderProducts(products, filters);
input.addEventListener("input", (e) => {
  // console.log(e.target.value);
  filters.searchItem = e.target.value;
  console.log(filters.searchItem);
  renderProducts(products, filters);
});
