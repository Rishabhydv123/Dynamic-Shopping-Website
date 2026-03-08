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
{ id: 41, title: "Herbal Face Wash", price: 299, category: "Beauty & Personal Care", image: "../Assets/Beauty & Personal Care/beauty1.png"},
{ id: 42, title: "Vitamin C Face Serum", price: 599, category: "Beauty & Personal Care", image: "../Assets/Beauty & Personal Care/beauty2.png"},
{ id: 43, title: "Hair Dryer", price: 1499, category: "Beauty & Personal Care", image: "../Assets/Beauty & Personal Care/personal (1).jpg"},
{ id: 44, title: "Makeup Kit Set", price: 1999, category: "Beauty & Personal Care", image: "../Assets/Beauty & Personal Care/personal5 (2).jpg"},
{ id: 45, title: "Body Lotion", price: 349, category: "Beauty & Personal Care", image: "../Assets/Beauty & Personal Care/beauty3.png"},
{ id: 46, title: "Perfume Spray", price: 899, category: "Beauty & Personal Care", image: "../Assets/Beauty & Personal Care/beauty4.png"},
{ id: 47, title: "Hair Straightener", price: 1799, category: "Beauty & Personal Care", image: "../Assets/Beauty & Personal Care/personal5 (3).jpg"},
{ id: 48, title: "Electric Trimmer", price: 1299, category: "Beauty & Personal Care", image: "../Assets/Beauty & Personal Care/personal5 (4).jpg"},
{ id: 49, title: "Skin Care Combo Pack", price: 1599, category: "Beauty & Personal Care", image: "../Assets/Beauty & Personal Care/beauty5.png"},
{ id: 50, title: "Nail Care Kit", price: 499, category: "Beauty & Personal Care", image: "../Assets/Beauty & Personal Care/personal5 (5).jpg"},

// Grocery & Daily Needs
{ id: 51, title: "Basmati Rice 5kg", price: 699, category: "Grocery & Daily Needs", image: "../Assets/Grocery & Daily Needs/Grocery1.png"},
{ id: 52, title: "Sunflower Cooking Oil 1L", price: 180, category: "Grocery & Daily Needs", image: "../Assets/Grocery & Daily Needs/Grocery2.png"},
{ id: 53, title: "Whole Wheat Atta 5kg", price: 320, category: "Grocery & Daily Needs", image: "../Assets/Grocery & Daily Needs/Grocery3.png"},
{ id: 54, title: "Organic Toor Dal 1kg", price: 210, category: "Grocery & Daily Needs", image: "../Assets/Grocery & Daily Needs/Grocery4.png"},
{ id: 55, title: "Salt Pack 1kg", price: 25, category: "Grocery & Daily Needs", image: "../Assets/Grocery & Daily Needs/Grocery5.png"},
{ id: 56, title: "Laundry Detergent Powder", price: 220, category: "Grocery & Daily Needs", image: "../Assets/Grocery & Daily Needs/DailyNeeds1.png"},
{ id: 57, title: "Dishwashing Liquid", price: 120, category: "Grocery & Daily Needs", image: "../Assets/Grocery & Daily Needs/DailyNeeds2.png"},
{ id: 58, title: "Toilet Cleaner", price: 150, category: "Grocery & Daily Needs", image: "../Assets/Grocery & Daily Needs/DailyNeeds3.png"},
{ id: 59, title: "Bath Soap Pack of 4", price: 180, category: "Grocery & Daily Needs", image: "../Assets/Grocery & Daily Needs/DailyNeeds4.png"},
{ id: 60, title: "Toothpaste Family Pack", price: 210, category: "Grocery & Daily Needs", image: "../Assets/Grocery & Daily Needs/DailyNeeds5.png"},


// Toys, Games & Sports
{ id: 61, title: "Cricket Bat for Kids", price: 799, category: "Toys, Games & Sports", image: "../Assets/Toys, Games & Sports/Game1.jpg"},
{ id: 62, title: "Football Size 5", price: 599, category: "Toys, Games & Sports", image: "../Assets/Toys, Games & Sports/Game2.jpg"},
{ id: 63, title: "Badminton Racket Set", price: 899, category: "Toys, Games & Sports", image: "../Assets/Toys, Games & Sports/Game3.jpeg"},
{ id: 64, title: "Car Racing Board Game", price: 499, category: "Toys, Games & Sports", image: "../Assets/Toys, Games & Sports/Game4.jpg"},
{ id: 65, title: "Chess Board Set", price: 350, category: "Toys, Games & Sports", image: "../Assets/Toys, Games & Sports/Game5.jpg"},
{ id: 66, title: "Remote Control Car", price: 1199, category: "Toys, Games & Sports", image: "../Assets/Toys, Games & Sports/Toy1.png"},
{ id: 67, title: "Building Blocks Toy Set", price: 699, category: "Toys, Games & Sports", image: "../Assets/Toys, Games & Sports/Toy2.jpg"},
{ id: 68, title: "Teddy Bear Soft Toy", price: 499, category: "Toys, Games & Sports", image: "../Assets/Toys, Games & Sports/Toy3.jpg"},
{ id: 69, title: "Toy Train Set", price: 899, category: "Toys, Games & Sports", image: "../Assets/Toys, Games & Sports/Toy4.png"},
{ id: 70, title: "Puzzle Game for Kids", price: 299, category: "Toys, Games & Sports", image: "../Assets/Toys, Games & Sports/Toy5.jpg"},

// Books & Stationery
{ id: 71, title: "A4 Notebook Pack", price: 199, category: "Books & Stationery", image: "../Assets/Books & Stationery/B1.png"},
{ id: 72, title: "Ball Pen Pack of 10", price: 120, category: "Books & Stationery", image: "../Assets/Books & Stationery/B2.png"},
{ id: 73, title: "Color Pencil Set", price: 180, category: "Books & Stationery", image: "../Assets/Books & Stationery/B3.png"},
{ id: 74, title: "Geometry Box", price: 150, category: "Books & Stationery", image: "../Assets/Books & Stationery/B4.png"},
{ id: 75, title: "Highlighter Marker Set", price: 220, category: "Books & Stationery", image: "../Assets/Books & Stationery/B5.png"},
{ id: 76, title: "Sticky Notes Pack", price: 90, category: "Books & Stationery", image: "../Assets/Books & Stationery/B6.png"},
{ id: 77, title: "Sketch Pen Set", price: 160, category: "Books & Stationery", image: "../Assets/Books & Stationery/B7.png"},
{ id: 78, title: "Drawing Book", price: 140, category: "Books & Stationery", image: "../Assets/Books & Stationery/B8.png"},
{ id: 79, title: "Office File Folder", price: 130, category: "Books & Stationery", image: "../Assets/Books & Stationery/B9.png"},
{ id: 80, title: "Stapler Machine", price: 110, category: "Books & Stationery", image: "../Assets/Books & Stationery/B10.png"},


// Pet Supplies
{ id: 81, title: "Dog Food 2kg Pack", price: 699, category: "Pet Supplies", image: "../Assets/Pet Supplies/pet1.jpg"},
{ id: 82, title: "Cat Food Pack", price: 499, category: "Pet Supplies", image: "../Assets/Pet Supplies/pet2.jpg"},
{ id: 83, title: "Pet Water Bowl", price: 199, category: "Pet Supplies", image: "../Assets/Pet Supplies/pet3.jpg"},
{ id: 84, title: "Dog Chew Toy", price: 250, category: "Pet Supplies", image: "../Assets/Pet Supplies/pet4.jpg"},
{ id: 85, title: "Pet Grooming Brush", price: 180, category: "Pet Supplies", image: "../Assets/Pet Supplies/pet5.jpg"},
{ id: 86, title: "Pet Shampoo", price: 320, category: "Pet Supplies", image: "../Assets/Pet Supplies/pet6.jpg"},
{ id: 87, title: "Dog Leash Belt", price: 350, category: "Pet Supplies", image: "../Assets/Pet Supplies/pet7.jpg"},
{ id: 88, title: "Cat Litter Box", price: 899, category: "Pet Supplies", image: "../Assets/Pet Supplies/pet8.jpg"},
{ id: 89, title: "Pet Nail Clipper", price: 140, category: "Pet Supplies", image: "../Assets/Pet Supplies/pet9.jpg"},
{ id: 90, title: "Dog Training Pad", price: 299, category: "Pet Supplies", image: "../Assets/Pet Supplies/pet10.jpg"},

// Automobile Accessories
{ id: 91, title: "Car Phone Holder", price: 299, category: "Automobile Accessories", image: "../Assets/Automobile Accessories/Auto1.avif"},
{ id: 92, title: "Car Air Freshener", price: 199, category: "Automobile Accessories", image: "../Assets/Automobile Accessories/Auto2.png"},
{ id: 93, title: "Car Cleaning Kit", price: 799, category: "Automobile Accessories", image: "../Assets/Automobile Accessories/Auto3.jpg"},
{ id: 94, title: "Bike Mobile Mount", price: 349, category: "Automobile Accessories", image: "../Assets/Automobile Accessories/Auto4.jpg"},
{ id: 95, title: "Car Vacuum Cleaner", price: 1599, category: "Automobile Accessories", image: "../Assets/Automobile Accessories/Auto5.jpg"},
{ id: 96, title: "Car Seat Cover Set", price: 2499, category: "Automobile Accessories", image: "../Assets/Automobile Accessories/Auto6.jpg"},
{ id: 97, title: "Car Tire Inflator Pump", price: 1799, category: "Automobile Accessories", image: "../Assets/Automobile Accessories/Auto7.jpg"},
{ id: 98, title: "Helmet for Bike Riders", price: 1299, category: "Automobile Accessories", image: "../Assets/Automobile Accessories/Auto8.jpg"},
{ id: 99, title: "Car LED Headlight Bulb", price: 899, category: "Automobile Accessories", image: "../Assets/Automobile Accessories/Auto9.jpg"},
{ id: 100, title: "Bike Chain Lubricant", price: 220, category: "Automobile Accessories", image: "../Assets/Automobile Accessories/Auto10.jpg"},

];


localStorage.setItem("products", JSON.stringify(allProducts));

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

<a href="product.html?id=${product.id}">
<img src="${product.image}" alt="${product.title}">
</a>
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

localStorage.setItem("products", JSON.stringify(allProducts));