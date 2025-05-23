// Cart functionality
let cart = JSON.parse(localStorage.getItem("cart")) || [];

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

// Product pricing
const pricesByWeight = {
  "25g": 280.0,
  "50g": 520.0,
  "100g": 950.0,
};

function updatePrice(weight) {
  const price = pricesByWeight[weight];
  const currentPriceEl = document.querySelector(".current-price");
  const originalPriceEl = document.querySelector(".original-price");
  const installmentEl = document.querySelector(".installment");

  currentPriceEl.textContent = `Rs. ${price.toFixed(2)}`;
  originalPriceEl.textContent = `Rs. ${(price * 2).toFixed(2)}`;
  installmentEl.textContent = `Pay Rs. ${(price / 3).toFixed(2)} x 3 months`;
}

// Image Gallery
function updateMainImage(src) {
  document.getElementById("mainImage").src = src;
}

// Tab Switching
document.querySelectorAll(".tab-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".tab-btn")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((content) => content.classList.remove("active"));

    button.classList.add("active");
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// Weight Selection
document.querySelectorAll(".weight-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".weight-btn")
      .forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    updatePrice(button.textContent);
  });
});

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
    city: document.getElementById("city").value,
    district: document.getElementById("district").value,
    notes: document.getElementById("notes").value,
  };

  const selectedWeight =
    document.querySelector(".weight-btn.active").textContent;
  const price = pricesByWeight[selectedWeight];
  const isCartAction = deliveryForm.dataset.action === "cart";

  // Create product object
  const product = {
    name: "MaxMark Ceylon Chili Seeds - Red Hot Hybrid F1",
    price: price,
    weight: selectedWeight,
    image: document.getElementById("mainImage").src,
    quantity: 1,
    delivery: formData,
  };

  // Add to cart
  const existingProduct = cart.find(
    (item) => item.name === product.name && item.weight === product.weight
  );

  if (existingProduct) {
    existingProduct.quantity += 1;
    existingProduct.delivery = formData;
  } else {
    cart.push(product);
  }

  // Update localStorage
  updateCart();

  // Format WhatsApp message
  const message = `Hi! I would like to ${
    isCartAction ? "add to cart" : "place an order"
  }:%0A
------ PRODUCT DETAILS ------%0A
Product: ${product.name}%0A
Weight: ${product.weight}%0A
Price: Rs. ${price.toFixed(2)}%0A%0A
------ DELIVERY DETAILS ------%0A
Name: ${formData.fullName}%0A
Phone: ${formData.phoneNumber}%0A
Address: ${formData.address}%0A
City: ${formData.city}%0A
District: ${formData.district}%0A
${formData.notes ? `Notes: ${formData.notes}%0A` : ""}%0A
Please process my Cash on Delivery order.`;

  // Close modal and reset form
  modal.style.display = "none";
  deliveryForm.reset();

  // Send WhatsApp message
  window.open(`https://wa.me/94763936648?text=${message}`, "_blank");

  // Show confirmation based on action
  if (isCartAction) {
    const confirmMessage = `
      Product added to cart successfully!
      • Weight: ${selectedWeight}
      • Price: Rs. ${price.toFixed(2)}
      • Delivery to: ${formData.city}, ${formData.district}
      
      WhatsApp message has been sent with your details.
      Check your cart to review or modify the order.
    `;
    alert(confirmMessage);
  } else {
    const confirmMessage = `
      Order placed successfully!
      • Weight: ${selectedWeight}
      • Price: Rs. ${price.toFixed(2)}
      • Delivery to: ${formData.city}, ${formData.district}
      
      Please check your WhatsApp for order confirmation and further instructions.
    `;
    alert(confirmMessage);
  }
});
