const container = document.getElementById("wishlistContainer");

function renderWishlist(){
const products = JSON.parse(localStorage.getItem("products")) || [];
const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
const wishlistProducts = products.filter(p => wishlist.includes(p.id));
container.innerHTML = "";
if(wishlistProducts.length === 0){
container.innerHTML = "<h2>Your Wishlist is Empty ❤️</h2>";
return;
}

wishlistProducts.forEach(product => {
const card = document.createElement("div");
card.classList.add("product-card");
card.innerHTML = `
<img src="${product.image}">
<h4>${product.title}</h4>
<p>₹${product.price}</p>
<button onclick="removeWishlist(${product.id})">
Remove
</button>
`;
container.appendChild(card);
});
}

window.removeWishlist = function(id){
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
wishlist = wishlist.filter(item => item !== id);
localStorage.setItem("wishlist", JSON.stringify(wishlist));
renderWishlist();
};
renderWishlist();