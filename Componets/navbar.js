export const navbar = () => {
  return `
  <navbar>
    <nav class="navbar">
      <h2 class="logo">Dynamic Shopping Website</h2>

      <div class="nav-right">
        <input type="text" id="searchInput" placeholder="Search products...">

        <select id="categorySelect"></select>

        <select id="sortSelect">
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>

        <a href="cart.html">
        Cart (<span id="cartCount">0</span>)
        </a>

        <a href="wishlist.html">Wishlist ❤️</a>
        <a href="orders.html">My Orders</a>

        <button id="logoutBtn" onclick="logout()">Logout</button>
      </div>
    </nav>

    <section class="products">
      <div id="productContainer" class="product-grid"></div>
    </section>
  </navbar>
  `;
};