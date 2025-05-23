# 🧾 Checkout Module Documentation (/checkout/checkout.readme.md)

## 📦 Purpose
This module enables a smooth, user-friendly checkout experience for customers choosing to pay via Cash on Delivery (COD). It allows users to input order and delivery information and submit it directly to the seller through WhatsApp.

## 🧰 Files Involved
- **checkout.html** – Main structure of the form and UI layout.
- **checkout.css** – Inline styles included in HTML; customize directly in `<style>` tag.
- **checkout.js** – JavaScript logic for capturing form input, calculating totals, and generating a WhatsApp message.

## 🛒 WhatsApp Checkout Integration
Our website allows customers to complete their order by submitting details via WhatsApp. The system collects order and customer information and formats it into a message that gets sent to one of the sellers.

## 📋 Customer Information Collection
During checkout, customers are asked to provide:
- Full Name
- Phone Number
- Email Address (optional)
- Delivery Address (Street, City, Postal Code)
- Landmark (optional)
- Special Notes (optional)

### Additional Collected Data:
- Selected Product(s)
- Quantity for each product
- Unit Price per product
- Subtotal per product (Qty × Unit Price)
- Grand Total

## 🔗 WhatsApp Message Generation
Upon submitting the form, a WhatsApp message is automatically generated in this format:

```
Hi, I would like to place an order:

Customer:
Name: John Doe
Phone: 0771234567
Email: john@example.com
Address: 123 Main St, Colombo 07, 10007
Landmark: Near supermarket
Notes: Leave at front gate

Order:
- Product A × 2 @ Rs.100 = Rs.200
- Product B × 1 @ Rs.150 = Rs.150
Total: Rs.350

Preferred Contact: WhatsApp
```

This message is encoded and opened on the user’s device via:
```
https://api.whatsapp.com/send?phone=+94706572923&text=[EncodedOrderDetails]
```

### 📨 Additional WhatsApp Targets
- **homemadeict@gmail.com** — +94 70 657 2923
- **maxmarkceylonseeds@gmail.com** — +94 76 393 6648

> You can configure which number to send to by changing the `phone` value in `checkout.js`.

## 🛠️ Customization Instructions
To adjust message structure or logic:
1. Open `/public/checkout.js`
2. Edit the `generateWhatsAppMessage()` function to change how the message is built.
3. Update the WhatsApp number in the same file if needed.

## 🧪 Testing Guide
- Fill in the form at `/checkout.html`
- Click "Place Order (Cash on Delivery via WhatsApp)"
- Ensure WhatsApp opens with a properly formatted message
- Confirm product list, total, and address fields appear correctly

## 🔒 Validation Notes
All required fields are marked with `*` and validated via HTML5. Further validations (like phone number format) can be added via JavaScript if necessary.

---
For help modifying this module, open this file or the `checkout.js` file and use AI assistance to regenerate or extend functionality.

