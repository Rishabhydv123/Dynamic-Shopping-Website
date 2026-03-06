const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const sortSelect = document.getElementById("sortSelect");

/* ------------------ MANUAL CATEGORIES ------------------ */
const categories = [
"Fashion & Apparel",
"Electronics",
"Home & Kitchen",
"Beauty & Personal Care",
"Grocery & Daily Needs",
"Toys, Games & Sports",
"Books & Stationery",
"Pet Supplies",
"Automobile Accessories",
"Digital Products"
];


/* ------------------ PRODUCTS ------------------ */
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

//   // Women's Collection
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

// Electronic Collection
{ id: 21, title: "JBL Bluetooth Speaker", price: 2999, category: "Electronics", image: "../Assets/Electronics/jbl.jpg"},
{ id: 22, title: "Fast Charging Adapter", price: 899, category: "Electronics", image: "../Assets/Electronics/charging.jpg"},
{ id: 23, title: "Wireless Headphones", price: 2499, category: "Electronics", image: "../Assets/Electronics/headphone.jpeg"},
{ id: 24, title: "iPhone 17 Pro Max", price: 129999, category: "Electronics", image: "../Assets/Electronics/iphone-17-pro-17-pro-max-hero.png"},
{ id: 25, title: "Apple MacBook", price: 149999, category: "Electronics", image: "../Assets/Electronics/Mac.webp"},
{ id: 26, title: "Portable Power Bank", price: 1599, category: "Electronics", image: "../Assets/Electronics/powerbank.png"},
{ id: 27, title: "Samsung Galaxy S26 Ultra", price: 119999, category: "Electronics", image: "../Assets/Electronics/SAMSUNG_GALAXY_S26_ULTRA_5_G_9232e2ad7e.png"},
{ id: 28, title: "Android Tablet", price: 19999, category: "Electronics", image: "../Assets/Electronics/Tablet.webp"},
{ id: 29, title: "Asus VivoBook 15 Laptop", price: 55999, category: "Electronics", image: "../Assets/Electronics/vivobook15.jpeg"},
{ id: 30, title: "Smart Watch", price: 3999, category: "Electronics", image: "../Assets/Electronics/waatch.png"},


// Home & Kitchen
{ id: 31, title: "Modern Sofa Set", price: 25999, category: "Home & Kitchen", image: "../Assets/Home & Kitchen/home2.png"},
{ id: 32, title: "Wooden Coffee Table", price: 6999, category: "Home & Kitchen", image: "../Assets/Home & Kitchen/home3.png"},
{ id: 33, title: "Kitchen Mixer Grinder", price: 3499, category: "Home & Kitchen", image: "../Assets/Home & Kitchen/kitchen1.png"},
{ id: 34, title: "Non-Stick Cookware Set", price: 2899, category: "Home & Kitchen", image: "../Assets/Home & Kitchen/kitchen2.png"},
{ id: 35, title: "Luxury Bed Lamp", price: 1999, category: "Home & Kitchen", image: "../Assets/Home & Kitchen/home1.png"},
{ id: 36, title: "Wall Decoration Frame", price: 1499, category: "Home & Kitchen", image: "../Assets/Home & Kitchen/home4.png"},
{ id: 37, title: "Steel Kitchen Storage Set", price: 1799, category: "Home & Kitchen", image: "../Assets/Home & Kitchen/kitchen3.png"},
{ id: 38, title: "Electric Rice Cooker", price: 2499, category: "Home & Kitchen", image: "../Assets/Home & Kitchen/kitchen4.png"},
{ id: 39, title: "Designer Chair", price: 4599, category: "Home & Kitchen", image: "../Assets/Home & Kitchen/home5.png"},
{ id: 40, title: "Kitchen Knife Set", price: 1299, category: "Home & Kitchen", image: "../Assets/Home & Kitchen/kitchen5.png"},

// Beauty & Personal Care
// Grocery & Daily Needs,
// Toys, Games & Sports
// Books & Stationery

// Pet Supplies
// Automobile Accessories
// Digital Products
];

function populateCategories(){
categorySelect.innerHTML="";
const allOption=document.createElement("option");
allOption.value="";
allOption.textContent="All Categories";

categorySelect.appendChild(allOption);

categories.forEach(cat=>{

const option=document.createElement("option");

option.value=cat;
option.textContent=cat;

categorySelect.appendChild(option);

});

}

function renderProducts(products){

productContainer.innerHTML="";

const cart=JSON.parse(localStorage.getItem("cart"))||[];

products.forEach(product=>{

const cartItem=cart.find(item=>item.id===product.id);
const quantity=cartItem?cartItem.quantity:0;

const card=document.createElement("div");
card.classList.add("product-card");

card.innerHTML=`

<img src="${product.image}" alt="${product.title}">
<h4>${product.title}</h4>
<p>₹${product.price}</p>

${
quantity>0
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

`;
productContainer.appendChild(card);
});
}

function applyFilters(){
let filtered=[...allProducts];
const searchValue=searchInput.value.toLowerCase();

if(searchValue){

filtered=filtered.filter(p=>
p.title.toLowerCase().includes(searchValue)
);
}

const selectedCategory=categorySelect.value;
if(selectedCategory){
filtered=filtered.filter(p=>
p.category===selectedCategory
);
}
if(sortSelect.value==="low"){
filtered.sort((a,b)=>a.price-b.price);
}
if(sortSelect.value==="high"){
filtered.sort((a,b)=>b.price-a.price);
}

renderProducts(filtered);

}

window.changeQuantity=function(id,change){
let cart=JSON.parse(localStorage.getItem("cart"))||[];
const product=allProducts.find(p=>p.id===id);
const existing=cart.find(item=>item.id===id);

if(existing){
existing.quantity+=change;
if(existing.quantity<=0){
cart=cart.filter(item=>item.id!==id);
}

}
else if(change>0){
cart.push({...product,quantity:1});
}

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();
applyFilters();
};

function updateCartCount(){
const cart=JSON.parse(localStorage.getItem("cart"))||[];
const totalQuantity=cart.reduce((sum,item)=>sum+item.quantity,0);
document.getElementById("cartCount").textContent=totalQuantity;
}

searchInput.addEventListener("input",applyFilters);
categorySelect.addEventListener("change",applyFilters);
sortSelect.addEventListener("change",applyFilters);

populateCategories();
renderProducts(allProducts);
updateCartCount();