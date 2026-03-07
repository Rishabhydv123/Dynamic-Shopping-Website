const cartContainer = document.getElementById("cartContainer");

const cartTotal = document.getElementById("cartTotal");
const gstAmount = document.getElementById("gstAmount");
const deliveryCharge = document.getElementById("deliveryCharge");
const discountAmount = document.getElementById("discountAmount");
const finalTotal = document.getElementById("finalTotal");

function loadCart(){
const cart = JSON.parse(localStorage.getItem("cart")) || [];
cartContainer.innerHTML = "";
if(cart.length === 0){
cartContainer.innerHTML = "<h3>Your cart is empty 😢</h3>";

cartTotal.textContent = 0;
gstAmount.textContent = 0;
deliveryCharge.textContent = 0;
discountAmount.textContent = 0;
finalTotal.textContent = 0;

return;
}

let subtotal = 0;
cart.forEach(item => {
subtotal += item.price * item.quantity;
const div = document.createElement("div");
div.classList.add("cart-item");

div.innerHTML = `
<img src="${item.image}" />
<h4>${item.title}</h4>
<p>₹${item.price}</p>

<div>
<button onclick="decreaseQty(${item.id})">-</button>
<span>${item.quantity}</span>
<button onclick="increaseQty(${item.id})">+</button>
</div>
<button onclick="removeItem(${item.id})">Remove</button>
`;
cartContainer.appendChild(div);

});

let gst = subtotal * 0.18;
let delivery = subtotal > 1000 ? 0 : 50;
let discount = subtotal > 5000 ? 500 : 0;

let total = subtotal + gst + delivery - discount;

cartTotal.textContent = subtotal.toFixed(2);
gstAmount.textContent = gst.toFixed(2);
deliveryCharge.textContent = delivery;
discountAmount.textContent = discount;
finalTotal.textContent = total.toFixed(2);

}

function increaseQty(id){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart = cart.map(item => {
if(item.id === id){
item.quantity++;
}
return item;

});

localStorage.setItem("cart", JSON.stringify(cart));
loadCart();
}

function decreaseQty(id){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart = cart.map(item => {
if(item.id === id && item.quantity > 1){
item.quantity--;
}

return item;
});

localStorage.setItem("cart", JSON.stringify(cart));
loadCart();
}

function removeItem(id){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart = cart.filter(item => item.id !== id);
localStorage.setItem("cart", JSON.stringify(cart));
loadCart();
}

function checkout(){
window.location.href = "checkout.html";
}

loadCart();