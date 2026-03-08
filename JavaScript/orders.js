const ordersContainer = document.getElementById("ordersContainer");

function loadOrders(){

const orders = JSON.parse(localStorage.getItem("orders")) || [];
ordersContainer.innerHTML = "";
if(orders.length === 0){
ordersContainer.innerHTML = "<h3>No Orders Found</h3>";
return;
}

orders.forEach(order => {
const div = document.createElement("div");
div.classList.add("order-card");
div.innerHTML = `
<h3>Order ID: ${order.orderId}</h3>
<p>Date: ${order.date}</p>
<h4>Items:</h4>
${order.items.map(item => `
<p>${item.title} x ${item.quantity}</p>
`).join("")}
<h4>Total: ₹${order.totalAmount}</h4>
<hr>
`;
ordersContainer.appendChild(div);
});
}
loadOrders();