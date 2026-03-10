export const footer = () => {
  return `
  <footer class="footer">
      <div class="footer-container">

          <div class="footer-section">
              <h3>Dynamic Shopping Website</h3>
              <p>Your one-stop shop for the best products at affordable prices.</p>
          </div>

        
          <div class="footer-section">
              <h4>Customer Service</h4>
              <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Returns</a></li>
                  <li><a href="#">Shipping</a></li>
                  <li><a href="#">Support</a></li>
              </ul>
          </div>

          <div class="footer-section">
              <h4>Follow Us</h4>
              <div class="social-links">
                  <a href="#">Facebook</a>
                  <a href="#">Instagram</a>
                  <a href="#">Twitter</a>
              </div>
          </div>

      </div>

      <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} Dynamic Shopping Website. All rights reserved.</p>
      </div>
  </footer>
  `;
};