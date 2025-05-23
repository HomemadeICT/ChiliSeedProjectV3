// Update cart count in navbar
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartNavLink = document.querySelector('nav a[href="cart/cart.html"]');
  if (cartNavLink) {
    cartNavLink.innerHTML = `🛒 Cart${cartCount > 0 ? ` (${cartCount})` : ""}`;
  }
}

// Initialize cart count when page loads
document.addEventListener("DOMContentLoaded", updateCartCount);
