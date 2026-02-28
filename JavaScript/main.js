const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const sortSelect = document.getElementById("sortSelect");


let allProducts = [
  // Men's Collection
{ id: 1, title: "Classic Slim Fit Shirt", price: 1999, category: "Fashion & Apparel", image: "../Assets/Mens/men1.jpg"},
{ id: 2, title: "Casual Denim Jacket", price: 1299, category: "Fashion & Apparel", image: "../Assets/Mens/men2.jpg"},
{ id: 3, title: "Premium Cotton T-Shirt", price: 1939, category: "Fashion & Apparel", image: "../Assets/Mens/men3.jpg" },
{ id: 4, title: "Formal Office Blazer", price: 2999, category: "Fashion & Apparel", image: "../Assets/Mens/men4.jpg" },
{ id: 5, title: "Stylish Leather Jacket", price: 6999, category: "Fashion & Apparel", image: "../Assets/Mens/men5.jpg" },
{ id: 6, title: "Summer Printed Shirt", price: 3999, category: "Fashion & Apparel", image: "../Assets/Mens/men6.jpg" },
{ id: 7, title: "Slim Fit Jeans", price: 2999, category: "Fashion & Apparel", image: "../Assets/Mens/men7.jpg" },
{ id: 8, title: "Comfortable Hoodie", price: 4999, category: "Fashion & Apparel", image: "../Assets/Mens/men8.jpg" },
{ id: 9, title: "Athletic Track Suit", price: 2999, category: "Fashion & Apparel", image: "../Assets/Mens/men9.jpg" },
{ id: 10, title: "Winter Wool Sweater", price: 5999, category: "Fashion & Apparel", image: "../Assets/Mens/men10.jpg" },

// Women's Collection
{ id: 11, title: "Elegant Floral Dress", price: 1999, category: "Fashion & Apparel", image: "../Assets/Womens/women1.jpg"},
{ id: 12, title: "Stylish Crop Top", price: 1299, category: "Fashion & Apparel", image: "../Assets/Womens/women2.jpg"},
{ id: 13, title: "Designer Party Gown", price: 1939, category: "Fashion & Apparel", image: "../Assets/Womens/women3.jpg" },
{ id: 14, title: "Casual Summer Kurti", price: 2999, category: "Fashion & Apparel", image: "../Assets/Womens/women4.jpg" },
{ id: 15, title: "Trendy Denim Jacket", price: 6999, category: "Fashion & Apparel", image: "../Assets/Womens/women5.jpg" },
{ id: 16, title: "Elegant Saree Collection", price: 3999, category: "Fashion & Apparel", image: "../Assets/Womens/women6.jpg" },
{ id: 17, title: "Comfort Fit Leggings", price: 2999, category: "Fashion & Apparel", image: "../Assets/Womens/women7.jpg" },
{ id: 18, title: "Stylish Handbag", price: 4999, category: "Fashion & Apparel", image: "../Assets/Womens/women8.jpg" },
{ id: 19, title: "Winter Cardigan", price: 2999, category: "Fashion & Apparel", image: "../Assets/Womens/women9.jpg" },
{ id: 20, title: "Premium Silk Top", price: 5999, category: "Fashion & Apparel", image: "../Assets/Womens/women10.jpg" },

  { id: 1, title: "Sports Shoes", price: 1999, category: "Footwear", image: "./assets/shoe.jpg" },
  { id: 2, title: "Casual T-Shirt", price: 799, category: "Clothing", image: "./assets/tshirt.jpg" },
  { id: 3, title: "Smart Watch", price: 2499, category: "Electronics", image: "./assets/watch.jpg" }
];


const mainCategories = [
  "Fashion & Apparel",
  "Electronics",
  "Home & Kitchen",
  "Beauty & Personal Care",
  "Grocery & Daily Needs",
  "Toys, Games & Sports",
  "Books & Stationery",
  "Pet Supplies",
  "Automobile Accessories",
  "Digital Products",
  ...new Set(allProducts.map(p => p.category))
];

const uniqueCategories = [...new Set(mainCategories)];

function populateCategories() {
  categorySelect.innerHTML = "";

  const allOption = document.createElement("option");
  allOption.value = "";
  allOption.textContent = "All Categories";
  categorySelect.appendChild(allOption);

  uniqueCategories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
  });
}

function renderProducts(products) {
  productContainer.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h4>${product.title}</h4>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(card);
  });
}

function applyFilters() {
  let filtered = [...allProducts];

  const searchValue = searchInput.value.toLowerCase();
  if (searchValue) {
    filtered = filtered.filter(p => p.title.toLowerCase().includes(searchValue));
  }

  const selectedCategory = categorySelect.value;
  if (selectedCategory) {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  if (sortSelect.value === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

searchInput.addEventListener("input", applyFilters);
categorySelect.addEventListener("change", applyFilters);
sortSelect.addEventListener("change", applyFilters);

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
  alert("Product added to cart!");
};

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cartCount").textContent = cart.length;
}

populateCategories();
renderProducts(allProducts);
updateCartCount();