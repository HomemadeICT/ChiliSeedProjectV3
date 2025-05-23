// Cart functionality
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart() {
  const product = {
    name: "MaxMark Ceylon Chili Seeds - Red Hot Hybrid F1",
    price: 280.0,
    weight: document.querySelector(".weight-btn.active").textContent,
    image: document.getElementById("mainImage").src,
    quantity: 1,
  };

  const existingProduct = cart.find(
    (item) => item.name === product.name && item.weight === product.weight
  );

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push(product);
  }

  updateCart();
  alert("Product added to cart!");
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
  });
});

// Add event listeners
document.querySelector(".add-to-cart-btn").addEventListener("click", addToCart);
document.querySelector(".buy-now-btn").addEventListener("click", () => {
  addToCart();
  window.location.href = "../checkout/checkout.html";
});
