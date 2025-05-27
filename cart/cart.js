// Initialize cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Constants
const DELIVERY_FEE = 350; // Default delivery fee

// Update cart display
function updateCartDisplay() {
  const cartItems = document.getElementById("cartItems");
  const subtotalEl = document.getElementById("subtotal");
  const shippingEl = document.getElementById("shipping");
  const totalEl = document.getElementById("total");

  if (cart.length === 0) {
    cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h2>Your cart is empty</h2>
                <p>Browse our products and add some items to your cart!</p>
                <a href="../products/products.html" class="checkout-btn">Shop Now</a>
            </div>
        `;
    subtotalEl.textContent = "Rs. 0.00";
    shippingEl.textContent = `Rs. ${DELIVERY_FEE.toFixed(2)}`;
    totalEl.textContent = `Rs. ${DELIVERY_FEE.toFixed(2)}`;
    return;
  }

  let subtotal = 0;
  cartItems.innerHTML = cart
    .map((item) => {
      const itemTotal = item.price * item.quantity;
      subtotal += itemTotal;
      return `
            <div class="cart-item" data-weight="${item.weight}">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div class="item-name">${item.name}</div>
                    <div class="item-weight">Weight: ${item.weight}</div>
                    <div class="item-price">Rs. ${item.price.toFixed(2)}</div>
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn minus" onclick="updateQuantity('${
                      item.weight
                    }', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn plus" onclick="updateQuantity('${
                      item.weight
                    }', 1)">+</button>
                    <button class="remove-btn" onclick="removeItem('${
                      item.weight
                    }')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    })
    .join("");

  const shipping = DELIVERY_FEE;
  const total = subtotal + shipping;

  subtotalEl.textContent = `Rs. ${subtotal.toFixed(2)}`;
  shippingEl.textContent = `Rs. ${shipping.toFixed(2)}`;
  totalEl.textContent = `Rs. ${total.toFixed(2)}`;
}

// Update item quantity
function updateQuantity(weight, change) {
  const item = cart.find((i) => i.weight === weight);
  if (item) {
    item.quantity += change;
    if (item.quantity < 1) {
      removeItem(weight);
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartDisplay();
    }
  }
}

// Remove item from cart
function removeItem(weight) {
  cart = cart.filter((item) => item.weight !== weight);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
}

// WhatsApp Checkout
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let message = "🛍️ *New Order*%0A%0A";
  message += "*Order Details:*%0A";
  message += "----------------%0A%0A";

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    message += `*${item.name}*%0A`;
    message += `• Weight: ${item.weight}%0A`;
    message += `• Quantity: ${item.quantity}%0A`;
    message += `• Price: Rs. ${item.price.toFixed(2)}%0A`;
    message += `• Subtotal: Rs. ${itemTotal.toFixed(2)}%0A%0A`;
    message += `• Subtotal: Rs. ${itemTotal.toFixed(2)}%0A%0A`;
  });

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = DELIVERY_FEE;
  const total = subtotal + shipping;

  message += "*Order Summary*%0A";
  message += "----------------%0A";
  message += `Subtotal: Rs. ${subtotal.toFixed(2)}%0A`;
  message += `Delivery Fee: Rs. ${shipping.toFixed(2)}%0A`;
  message += `*Total Amount: Rs. ${total.toFixed(2)}*%0A%0A`;

  message += "*Payment Method:* Cash on Delivery%0A";
  message += "----------------%0A";
  message += "Please process my order for Cash on Delivery. Thank you!";

  // Clear cart after order is placed
  localStorage.removeItem("cart");
  cart = [];

  // Open WhatsApp with the order message
  window.open(`https://wa.me/94763936648?text=${message}`, "_blank");

  // Update the display after cart is cleared
  updateCartDisplay();
});

// Initialize the cart display when the page loads
document.addEventListener("DOMContentLoaded", updateCartDisplay);
