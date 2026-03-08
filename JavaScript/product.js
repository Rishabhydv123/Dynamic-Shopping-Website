const productPage = document.getElementById("productPage");
const relatedContainer = document.getElementById("relatedProducts");

const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

const products = JSON.parse(localStorage.getItem("products")) || [];

const product = products.find(p => p.id === productId);

function getQuantity(id){
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const item = cart.find(p => p.id === id);
return item ? item.quantity : 0;

}

window.changeQuantity = function(id, change){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const product = products.find(p => p.id === id);
const existing = cart.find(item => item.id === id);
if(existing){
existing.quantity += change;
if(existing.quantity <= 0){
cart = cart.filter(item => item.id !== id);
}

}
else if(change > 0){
cart.push({...product, quantity:1});

}

localStorage.setItem("cart", JSON.stringify(cart));
renderProduct();
renderRelatedProducts();

};

function renderProduct(){
if(!product){
productPage.innerHTML = "<h2>Product not found</h2>";
return;
}

const quantity = getQuantity(product.id);

productPage.innerHTML = `
<div class="product-container">
<div class="product-image">
<img src="${product.image}" alt="${product.title}">
</div>
<div class="product-details">
<h2>${product.title}</h2>
<p><strong>Category:</strong> ${product.category}</p>
<h3>Price: ₹${product.price}</h3>
${
quantity > 0
?
`
<div class="quantity-controls">
<button onclick="changeQuantity(${product.id},-1)">-</button>
<span>${quantity}</span>
<button onclick="changeQuantity(${product.id},1)">+</button>
</div>
`
:
`<button onclick="changeQuantity(${product.id},1)">Add to Cart</button>`
}
</div>
</div>
`;

}

function renderRelatedProducts(){

if(!product) return;
const related = products.filter(p =>
p.category === product.category && p.id !== product.id
);

relatedContainer.innerHTML = "";
related.slice(0,4).forEach(item => {
const quantity = getQuantity(item.id);
const card = document.createElement("div");
card.classList.add("product-card");

card.innerHTML = `
<a href="product.html?id=${item.id}">
<img src="${item.image}" alt="${item.title}">
</a>
<h4>${item.title}</h4>
<p>₹${item.price}</p>
${
quantity > 0

?

`
<div class="quantity-controls">
<button onclick="changeQuantity(${item.id},-1)">-</button>
<span>${quantity}</span>
<button onclick="changeQuantity(${item.id},1)">+</button>
</div>
`
:
`<button onclick="changeQuantity(${item.id},1)">Add to Cart</button>`
}
`;
relatedContainer.appendChild(card);
});
}

renderProduct();
renderRelatedProducts();