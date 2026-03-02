const cartContainer = document.getElementById("cartContainer");
const cartTotal = document.getElementById("cartTotal");

function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<h3>Your cart is empty 😢</h3>";
    cartTotal.textContent = 0;
    return;
  }

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <img src="${item.image}" />
      <h4>${item.title}</h4>
      <p>₹${item.price}</p>
      <div>
        <button onclick="decreaseQty(${item.id})">-</button>
        ${item.quantity}
        <button onclick="increaseQty(${item.id})">+</button>
      </div>
      <button onclick="removeItem(${item.id})">Remove</button>
    `;

    cartContainer.appendChild(div);
  });

  cartTotal.textContent = total;
}

function increaseQty(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart = cart.map(item => {
    if (item.id === id) {
      item.quantity++;
    }
    return item;
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function decreaseQty(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart = cart.map(item => {
    if (item.id === id && item.quantity > 1) {
      item.quantity--;
    }
    return item;
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function removeItem(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart = cart.filter(item => item.id !== id);

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function checkout() {
  alert("Proceeding to checkout...");
  window.location.href = "checkout.html";
}

loadCart();