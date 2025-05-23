# Project Title

## 🌐 Navbar Component

This project includes a responsive and visually appealing navigation bar inspired by the design aesthetics of **Lankem Agro**. It is designed to ensure seamless navigation across various sections of your website, enhancing both user experience and accessibility.

---

## 📁 Project Structure

- `public/index.html`: Main HTML file containing the integrated navbar component.
- `style.css`: Contains the CSS styles for the website layout and design.
- `script.js`: Includes JavaScript functionalities to enhance the interactive elements of the navbar.

---

## 🔗 Navigation Links

The navigation bar includes the following links, each directing users to their respective sections of the website:

- **Home**
- **About Us**
- **Products**
- **Contact**
- **🛒 Cart**

> **Note:** Ensure that the links correspond to the actual paths in your project.

---

## Navbar Style Guidelines (Non-Coded)

🎨 Color Palette
• Top Bar Background: Dark green (#0d4b31)
• Main Navbar Background: Medium/dark green (#126945)
• Active Menu Item Highlight: Light yellow-green underline (#c2d973)
• Text Color: Pure white for menu items and icons
• Cart Badge: Light yellow-green background with black text for the item count
📐 Layout
• Structure:
○ Left: Text-based brand name (if you decide to keep it there, or just leave it empty)
○ Right: Horizontal alignment of menu items in this order: Home | About Us | Products | Contact | Cart | Admin
• Spacing:
○ Equal padding (15–20px) between each menu item
○ Vertical padding for the navbar: 15px top and bottom
• Icons (Cart & Admin):
○ Inline with menu text items
○ Icons sized 18–20px, aligned vertically centered with the text

🔤 Typography
• Font: Clean sans-serif (like Open Sans, Roboto, or system UI)
• Font Size:
○ Regular menu items: Medium (16–18px)
○ Cart count: Smaller (12px)
• Font Weight: Bold for menu items, normal for other text

✏️ Effects & Details
• Active Menu Item:
○ Thin underline directly beneath the text in a light yellow-green color
• Cart Icon:
○ Positioned on the far right
○ Circular badge showing the number of items, overlapping top-right of the cart icon
• Hover Effects:
○ Slight color change (lighter or underline) on hover for menu items
○ Cursor changes to pointer

📱 Responsiveness
• Mobile Behavior:
○ Collapse menu items into a hamburger menu icon (☰) on smaller screens
○ Cart icon remains visible
○ Top contact and social icons could stack or hide based on space

📝 Optional Add-ons
• Sticky Navbar: Stays fixed at the top when scrolling
• Smooth Scroll / Scroll Highlight: Smoothly scrolls to sections and highlights active nav link

✅ Summary:
Keep it clean, modern, and consistent with:
• Two-tone green background
• Bold, white sans-serif text
• Simple underline indicator for the active page
• Minimal but functional icons (social, cart, phone)
• Responsiveness for mobile screens

---

## ⚙️ Customization Guidelines

To tailor the navigation bar to your specific needs:

1. **Modify Links:** Update the `href` attributes in the `index.html` to point to the correct paths for your project.
2. **Adjust Styling:** Alter color schemes, fonts, or spacing in the `<style>` section of `index.html` to match your brand identity.
3. **Enhance Functionality:** Use the `<script>` section to add interactive features, such as dropdown menus, mobile responsiveness, or dynamic active link highlighting.

---

## 📌 Implementation Tips

- **Responsive Design:** The navigation bar uses media queries to ensure that it adapts seamlessly to various screen sizes, offering a mobile-friendly experience.
- **Accessibility:** ARIA attributes and keyboard navigation support have been integrated to make the navigation bar accessible to all users.
- **Performance Optimization:** To enhance load times and overall performance, it is recommended to minimize your CSS and JavaScript files in production.

---

Thanks for the clarification! Here's the updated **Integration** section for your non-SPA project:

````markdown
## 🧩 Integration

To integrate the navigation bar into your web pages, follow these steps:

1. **HTML Inclusion:**  
   The navbar component is included directly in your `public/index.html`. You can place the following code inside the `<body>` tag of your `index.html` file or any other HTML file where you want the navbar to appear:

   ```html
   <!-- Navbar Section -->
   <nav>
     <a href="#home">Home</a>
     <a href="#about">About Us</a>
     <a href="#products">Products</a>
     <a href="#contact">Contact</a>
     <a href="#cart">🛒 Cart</a>
     <a href="#admin">👤 Admin</a>
   </nav>
   ```
````

2. **Link Styles and Scripts:**  
   Ensure that the styles and scripts related to the navbar are linked correctly in your HTML files. Since your project uses the `public/` folder, you can link the CSS and JavaScript files as follows:

   In your `public/index.html` or any other relevant HTML file, add the following in the `<head>` section for CSS:

   ```html
   <!-- Link to CSS file -->
   <link rel="stylesheet" href="public/styles.css" />
   ```

   Then, add the following before the closing `</body>` tag for JavaScript:

   ```html
   <!-- Link to JavaScript file -->
   <script src="public/script.js" defer></script>
   ```

   You can also organize the navbar's CSS and JavaScript into the `components/` directory if preferred. For example, if you store them in `components/navbar/navbar.css` and `components/navbar/navbar.js`, you would link them in the same way:

   ```html
   <!-- Link to Navbar CSS -->
   <link rel="stylesheet" href="components/navbar/navbar.css" />

   <!-- Link to Navbar JS -->
   <script src="components/navbar/navbar.js" defer></script>
   ```

3. **Use in Other Pages:**  
   To integrate the navbar into other pages (e.g., `auth/login.html`, `products/products.html`, `cart/cart.html`, etc.), simply copy the `<nav>` section and include the relevant links to the `styles.css` and `script.js` in the same way as described above.

   Ensure the file paths to the CSS and JS files are correct relative to the structure of each page.

---

```

### Key Changes:
1. **HTML Inclusion:** For a non-SPA setup, simply copy the navbar code into the HTML file where it's needed, as it doesn't require dynamic loading.
2. **Link Styles and Scripts:** The instructions ensure that CSS and JavaScript are correctly linked in each HTML file. The paths have been adapted to your folder structure.
3. **Use in Other Pages:** The navbar can be manually included in other pages by copying the HTML and ensuring proper linking of styles and scripts.

This setup will work for your traditional multi-page website, where each page includes the necessary CSS and JavaScript.
```
