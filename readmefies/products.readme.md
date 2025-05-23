

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Details - Max Mark Ceylon Agro</title>
    <styles>
        <style>
/* products.css */
body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f9f9f9;
    color: #333;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #228b22;
    padding: 15px 30px;
    color: white;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-weight: 500;
}

.product-details {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    gap: 40px;
}

.product-gallery {
    flex: 1;
    min-width: 300px;
}

.main-image img {
    width: 100%;
    border-radius: 10px;
    border: 1px solid #ccc;
}

.thumbnails {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.thumbnails img {
    width: 23%;
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid transparent;
    transition: border 0.3s;
}

.thumbnails img:hover {
    border-color: #228b22;
}

.product-info {
    flex: 1;
    min-width: 300px;
}

h1 {
    font-size: 1.8rem;
    margin-bottom: 20px;
}

.pricing {
    margin-bottom: 20px;
}

.current-price {
    font-size: 1.6rem;
    font-weight: bold;
    color: #e60000;
}

.original-price {
    text-decoration: line-through;
    color: gray;
}

.discount {
    color: green;
    font-weight: bold;
}

.installment {
    font-size: 0.9rem;
    color: #555;
}

.weight-selection {
    margin: 20px 0;
}

.weight-options .weight-btn {
    padding: 10px 20px;
    margin-right: 10px;
    border: 1px solid #ccc;
    background-color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.weight-btn.active, .weight-btn:hover {
    background-color: #228b22;
    color: white;
    border-color: #228b22;
}

.purchase-options button {
    padding: 12px 24px;
    margin: 10px 10px 10px 0;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 600;
    transition: background-color 0.3s;
}

.add-to-cart-btn {
    background-color: #e60000;
    color: white;
}

.buy-now-btn {
    background-color: #228b22;
    color: white;
}

.delivery-note {
    font-size: 0.95rem;
    margin-top: 10px;
}

.product-details-tabs {
    margin-top: 30px;
}

.tab-headers {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
}

.tab-btn {
    padding: 10px 20px;
    border: 1px solid #ccc;
    background-color: white;
    cursor: pointer;
    border-radius: 5px;
}

.tab-btn.active {
    background-color: #228b22;
    color: white;
    border-color: #228b22;
}

.tab-content {
    display: none;
    background-color: white;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.tab-content.active {
    display: block;
}

.whatsapp-chat {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    background-color: #25d366;
    color: white;
    padding: 10px 15px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: background-color 0.3s;
}

.whatsapp-chat:hover {
    background-color: #1ebe57;
}

.whatsapp-icon {
    margin-right: 10px;
}
</style>

    </styles>
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="logo">Max Mark Ceylon Agro</div>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html#about">About Us</a></li>
            <li><a href="index.html#products">Products</a></li>
            <li><a href="index.html#contact">Contact</a></li>
            <li><a href="#cart" class="cart-icon">🛒 Cart</a></li>
        </ul>
    </nav>

    <!-- Product Details Section -->
    <div class="product-details">
        <div class="product-gallery">
            <div class="main-image">
                <img src="placeholder-chili.jpg" alt="Red Hot Hybrid F1 Chili" id="mainImage">
            </div>
            <div class="thumbnails">
                <img src="placeholder-chili.jpg" alt="Front View" onclick="updateMainImage(this.src)">
                <img src="placeholder-chili.jpg" alt="Back View" onclick="updateMainImage(this.src)">
                <img src="placeholder-chili.jpg" alt="Side View" onclick="updateMainImage(this.src)">
                <img src="placeholder-chili.jpg" alt="Package View" onclick="updateMainImage(this.src)">
            </div>
        </div>

        <div class="product-info">
            <h1>MaxMark Ceylon Chili Seeds - Red Hot Hybrid F1</h1>
            
            <div class="pricing">
                <div class="current-price">Rs. 280.00</div>
                <div class="original-price">Rs. 560.00</div>
                <div class="discount">-50% OFF</div>
                <div class="installment">Pay Rs. 93.33 x 3 months</div>
            </div>

            <div class="weight-selection">
                <h3>Select Weight:</h3>
                <div class="weight-options">
                    <button class="weight-btn active">25g</button>
                    <button class="weight-btn">50g</button>
                    <button class="weight-btn">100g</button>
                </div>
            </div>

            <div class="purchase-options">
                <button class="add-to-cart-btn">Add to Cart</button>
                <button class="buy-now-btn">Cash on Delivery</button>
                <p class="delivery-note">✅ We deliver island-wide!</p>
            </div>

            <div class="product-details-tabs">
                <div class="tab-headers">
                    <button class="tab-btn active" data-tab="specifications">Specifications</button>
                    <button class="tab-btn" data-tab="delivery">Delivery Info</button>
                    <button class="tab-btn" data-tab="returns">Returns</button>
                </div>

                <div class="tab-content active" id="specifications">
                    <ul>
                        <li><strong>Weight Options:</strong> 25g, 50g, 100g</li>
                        <li><strong>Seeds per packet:</strong> Approximately 100 seeds (25g)</li>
                        <li><strong>Shelf Life:</strong> 12 months when stored properly</li>
                        <li><strong>Storage:</strong> Keep in a cool, dry place</li>
                    </ul>
                </div>

                <div class="tab-content" id="delivery">
                    <p>Delivery in 2-5 days within Sri Lanka.</p>
                    <ul>
                        <li>Free delivery for orders above Rs. 2000</li>
                        <li>Track your order through WhatsApp updates</li>
                        <li>Secure packaging ensures seed safety</li>
                    </ul>
                </div>

                <div class="tab-content" id="returns">
                    <p>Return within 7 days for damaged or incorrect items.</p>
                    <ul>
                        <li>Items must be unopened and in original packaging</li>
                        <li>Contact us via WhatsApp for return authorization</li>
                        <li>Refund processed within 3-5 business days</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- WhatsApp Chat Button -->
    <a href="https://wa.me/94763936648" class="whatsapp-chat" target="_blank" rel="noopener noreferrer">
        <div class="whatsapp-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
            </svg>
        </div>
        <span>Chat with us!</span>
    </a>

    <script>
        // Image Gallery
        function updateMainImage(src) {
            document.getElementById('mainImage').src = src;
        }

        // Tab Switching
        document.querySelectorAll('.tab-btn').forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and content
                document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                const tabId = button.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Weight Selection
        document.querySelectorAll('.weight-btn').forEach(button => {
            button.addEventListener('click', () => {
                document.querySelectorAll('.weight-btn').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    </script>
</body>
</html>
