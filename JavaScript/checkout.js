const summaryItems = document.getElementById("summaryItems");
const orderTotal = document.getElementById("orderTotal");

function loadSummary(){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
summaryItems.innerHTML = "";
if(cart.length === 0){

summaryItems.innerHTML = "<p>Your cart is empty</p>";
orderTotal.textContent = 0;
return;

}

let total = 0;
cart.forEach(item => {
total += item.price * item.quantity;
const div = document.createElement("div");
div.classList.add("summary-item");

div.innerHTML = `
<span>${item.title} x ${item.quantity}</span>
<span>₹${item.price * item.quantity}</span>
`;
summaryItems.appendChild(div);
});
orderTotal.textContent = total;

}

loadSummary();

const form = document.getElementById("checkoutForm");
form.addEventListener("submit",(e)=>{
e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const address = document.getElementById("address").value;
const city = document.getElementById("city").value;
const pincode = document.getElementById("pincode").value;
const payment = document.getElementById("payment").value;

if(!name || !email || !address || !city || !pincode || !payment){
alert("Please fill all fields");
return;

}

alert("Order Placed Successfully 🎉");
localStorage.removeItem("cart");
window.location.href="index.html";

});