const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

let allProducts = [];

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    allProducts = data;
    renderProducts(allProducts);
  } catch (error) {
    console.log("Error fetching products:", error);
  }
}

function renderProducts(products) {
  productContainer.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" />
      <h4>${product.title.slice(0, 20)}...</h4>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productContainer.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = allProducts.filter(product =>
    product.title.toLowerCase().includes(value)
  );
  renderProducts(filtered);
});

sortSelect.addEventListener("change", () => {
  let sorted = [...allProducts];

  if (sortSelect.value === "low") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === "high") {
    sorted.sort((a, b) => b.price - a.price);
  }

  renderProducts(sorted);
});

window.addToCart = function(id) {
  const product = allProducts.find(p => p.id === id);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
};

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cartCount").textContent = cart.length;
}

getProducts();
updateCartCount();