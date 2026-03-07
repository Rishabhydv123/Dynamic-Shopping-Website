const productPage = document.getElementById("productPage");

const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

const products = JSON.parse(localStorage.getItem("products")) || [];

const product = products.find(p => p.id === productId);
function renderProduct(){
if(!product){
productPage.innerHTML = "<h2>Product not found</h2>";
return;
}
productPage.innerHTML = `
<div class="product-container">
<div class="product-image">
<img src="${product.image}" alt="${product.title}">
</div>
<div class="product-details">
<h2>${product.title}</h2>
<p><strong>Category:</strong> ${product.category}</p>
<h3>Price: ₹${product.price}</h3>
<button id="addCartBtn">Add to Cart</button>
</div>
</div>

`;

document.getElementById("addCartBtn").addEventListener("click", () => {
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const existing = cart.find(item => item.id === product.id);
if(existing){
existing.quantity++;
}
else{
cart.push({...product, quantity:1});
}
localStorage.setItem("cart", JSON.stringify(cart));
alert("Product added to cart 🛒");
});
}

renderProduct();