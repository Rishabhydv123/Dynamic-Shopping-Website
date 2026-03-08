const relatedContainer = document.getElementById("relatedProducts");

function renderRelatedProducts(){

if(!product) return;

const related = products.filter(p =>
p.category === product.category && p.id !== product.id
);

relatedContainer.innerHTML = "";

related.slice(0,4).forEach(item => {

const card = document.createElement("div");

card.classList.add("product-card");

card.innerHTML = `

<a href="product.html?id=${item.id}">
<img src="${item.image}" width="150">
</a>

<h4>${item.title}</h4>

<p>₹${item.price}</p>

`;

relatedContainer.appendChild(card);

});

}

renderRelatedProducts();