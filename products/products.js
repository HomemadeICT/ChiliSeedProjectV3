// Cart functionality
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Constants
const DELIVERY_FEE = 350; // Default delivery fee

// Product pricing
const pricesByWeight = {
  "5g": 920.0,
  "10g": 1750.0,
  "20g": 3500.0,
  "50g": 8750.0,
};

// Update cart count in navbar
function updateCartCount() {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartNavLink = document.querySelector('nav a[href="../cart/cart.html"]');
  cartNavLink.innerHTML = `🛒 Cart${cartCount > 0 ? ` (${cartCount})` : ""}`;
}

function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// Initialize price for default selected weight
document.addEventListener("DOMContentLoaded", () => {
  const activeWeight = document.querySelector(".weight-btn.active");
  if (activeWeight) {
    updatePrice(activeWeight.textContent);
  }
  updateCartCount();
});

function updatePrice(weight) {
  const price = pricesByWeight[weight];
  const currentPriceEl = document.querySelector(".current-price");
  const originalPriceEl = document.querySelector(".original-price");
  const installmentEl = document.querySelector(".installment");

  currentPriceEl.textContent = `Rs. ${price.toFixed(2)}`;
  originalPriceEl.textContent = `Rs. ${(price * 1.4).toFixed(2)}`; // 40% markup
  installmentEl.textContent = `Pay Rs. ${(price / 3).toFixed(2)} x 3 months`;
}

// Initialize modal
const modal = document.getElementById("deliveryModal");
const closeBtn = document.querySelector(".close-btn");
const deliveryForm = document.getElementById("deliveryForm");

// Show modal for both Add to Cart and Buy Now buttons
document.querySelector(".add-to-cart-btn").addEventListener("click", () => {
  modal.style.display = "block";
  deliveryForm.setAttribute("data-action", "cart");
});

document.querySelector(".buy-now-btn").addEventListener("click", () => {
  modal.style.display = "block";
  deliveryForm.setAttribute("data-action", "buy-now");
});

// Close modal handlers
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Handle form submission
deliveryForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect form data
  const formData = {
    fullName: document.getElementById("fullName").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city")?.value || "",
    district: document.getElementById("district")?.value || "",
    notes: document.getElementById("notes")?.value || "",
  };

  const selectedWeight =
    document.querySelector(".weight-btn.active").textContent;
  const price = pricesByWeight[selectedWeight];
  const isCartAction = deliveryForm.dataset.action === "cart";
  const shipping = DELIVERY_FEE;
  const total = price + shipping;

  // Format WhatsApp message
  let message = "🌶️ *New Order Request*%0A%0A";

  message += "*Product Details*%0A";
  message += "----------------%0A";
  message += `Product: MaxMark Ceylon Chili Seeds - MICH HY 1%0A`;
  message += `Weight: ${selectedWeight}%0A`;
  message += `Price: Rs. ${price.toFixed(2)}%0A`;
  message += `Delivery Fee: Rs. ${shipping.toFixed(2)}%0A`;
  message += `*Total Amount: Rs. ${total.toFixed(2)}*%0A%0A`;

  message += "*Delivery Details*%0A";
  message += "----------------%0A";
  message += `Name: ${formData.fullName}%0A`;
  message += `Phone: ${formData.phoneNumber}%0A`;
  message += `Address: ${formData.address}%0A`;
  if (formData.city) message += `City: ${formData.city}%0A`;
  if (formData.district) message += `District: ${formData.district}%0A`;
  if (formData.notes) message += `Notes: ${formData.notes}%0A`;
  message += "%0A*Payment Method:* Cash on Delivery%0A";

  // Add to cart if necessary
  if (isCartAction) {
    const product = {
      name: "MaxMark Ceylon Chili Seeds - MICH HY 1",
      price: price,
      weight: selectedWeight,
      image: document.getElementById("mainImage").src,
      quantity: 1,
      delivery: formData,
    };

    const existingProduct = cart.find(
      (item) => item.name === product.name && item.weight === product.weight
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
      existingProduct.delivery = formData;
    } else {
      cart.push(product);
    }

    updateCart();
  }

  // Close modal and reset form
  modal.style.display = "none";
  deliveryForm.reset();

  // Send WhatsApp message
  window.open(`https://wa.me/94763936648?text=${message}`, "_blank");

  // Show confirmation
  const confirmMessage = isCartAction
    ? `Product added to cart successfully!\n• Weight: ${selectedWeight}\n• Price: Rs. ${price.toFixed(
        2
      )}\n• Delivery Fee: Rs. ${shipping.toFixed(
        2
      )}\n• Total: Rs. ${total.toFixed(
        2
      )}\n\nWhatsApp message has been sent with your details.`
    : `Order placed successfully!\n• Weight: ${selectedWeight}\n• Price: Rs. ${price.toFixed(
        2
      )}\n• Delivery Fee: Rs. ${shipping.toFixed(
        2
      )}\n• Total: Rs. ${total.toFixed(
        2
      )}\n\nPlease check your WhatsApp for order confirmation.`;

  alert(confirmMessage);
});
