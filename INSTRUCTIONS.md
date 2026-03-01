# GiftNest - Gift Shop Website

A beautiful, modern gift shop website for "GiftNest - Where Every Gift Feels Like Home". The website includes a variety of gift items, shopping cart functionality, and payment integration options.

## Features

✨ **Product Catalog**: 14 gift categories
- Bouquet
- Scented Candles
- Surprise Boxes
- Photo Frames
- Personalized Bottle
- Premium Watches
- Premium Wallets
- Premium Body Mists
- Cups & Mugs
- Kids Toys & Puzzles
- Men's Perfume
- Premium Sunglasses
- 3D Moon Crystal Lamp
- 4ft Teddy Bear

🛒 **Shopping Cart**: Add, remove, and manage items in your cart
💳 **Payment Options**: eSewa and Bank Transfer with QR code placeholders
📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
🎨 **Modern UI**: Beautiful gradient backgrounds and smooth animations

## File Structure

```
Gift-nest/
├── index.html      # Main HTML structure
├── styles.css      # Complete styling with responsive design
├── script.js       # JavaScript functionality and cart logic
├── logo.png        # Your shop logo (add this file)
└── README.md       # This file
```

## How to Use

### Running the Website

1. Make sure you have `logo.png` in the root directory of the project
2. Add product images as `product-1.png`, `product-2.png`, ... `product-11.png` in the root directory
3. Open `index.html` in any modern web browser
4. The website will load with all products ready to shop

### Adding Product Images

Each product expects an image file named `product-{id}.png`. Create or add these files to your project root:

- `product-1.png` - Bouquet
- `product-2.png` - Scented Candles
- `product-3.png` - Surprise Boxes
- `product-4.png` - Photo Frames
- `product-5.png` - Personalized Bottle
- `product-6.png` - Premium Watches
- `product-7.png` - Premium Wallets
- `product-8.png` - Premium Body Mists
- `product-9.png` - Cups & Mugs
- `product-10.png` - Kids Toys & Puzzles
- `product-11.png` - Men's Perfume
- `product-12.png` - Premium Sunglasses
- `product-13.png` - 3D Moon Crystal Lamp
- `product-14.png` - 4ft Teddy Bear

**Note:** If an image file is missing or fails to load, a gray placeholder with "Product Image" text will be displayed automatically.

### Editing Prices

To edit product prices, open `script.js` and find the product data section at the top. Each product has a `price` field:

```javascript
const products = [
    {
        id: 1,
        name: 'Bouquet',
        price: 0,  // ← Change this number to set the price in Rs.
        emoji: '💐',
        description: 'Beautiful assorted flower bouquet...'
    },
    // ... more products
];
```

Simply change the number for any product. Example: `price: 499` for Rs. 499

### Editing Product Descriptions

To edit product descriptions, update the `description` field for each product in the same products array:

```javascript
{
    id: 1,
    name: 'Bouquet',
    price: 499,
    emoji: '💐',
    description: 'Your custom description here' // ← Change this text
}
```

### Customizing Payment Methods

**For eSewa**:
- Open `script.js`
- Find the `selectPayment('esewa')` section in the `selectPayment()` function
- Replace the placeholder QR code section with your actual eSewa QR code details

**For Bank Transfer**:
- Open `script.js`
- Find the `selectPayment('bank')` section
- Update the bank details (Bank Name, Account Number, AccountHolder, etc.)
- Replace the placeholder QR code with your actual bank QR code

### Adding Your Logo

Replace the `logo.png` file in the root directory with your own logo. The logo will be displayed:
- 60×60 pixels in the header
- To the left of "GiftNest" text
- With the tagline "Where Every Gift Feels Like Home" below it

The logo can be any image format (PNG, JPG, SVG). Make sure it's a square or circular design for best results.

## Customization Guide

### Changing Colors

Edit the CSS variables at the top of `styles.css`:

```css
:root {
    --primary-color: #d4637c;        /* Main theme color */
    --secondary-color: #f5a623;      /* Accent color */
    --dark-color: #2c3e50;           /* Dark text */
    --light-color: #ecf0f1;          /* Light backgrounds */
    --success-color: #27ae60;        /* Green for buttons */
}
```

### Changing the Tagline

Edit the tagline in `index.html`:

```html
<p class="tagline">Where Every Gift Feels Like Home</p>
<!-- Change the text inside the <p> tag -->
```

### Changing Product Emojis

Each product has an emoji. To change it, edit the `emoji` field in `script.js`:

```javascript
{
    id: 1,
    name: 'Bouquet',
    price: 499,
    emoji: '🌟',  // ← Change to any emoji you like
    description: '...'
}
```

### Adding New Products

To add a new product, add an object to the `products` array in `script.js`:

```javascript
{
    id: 12,  // Make sure this is unique
    name: 'New Product Name',
    price: 0,
    emoji: '🎪',  // Choose an appropriate emoji
    description: 'Product description here'
}
```

The website will automatically display the new product.

### Removing Products

Simply remove or comment out the product object from the `products` array in `script.js`.

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Features Explanation

### 1. Product Display
- All products are displayed in a responsive grid
- Clicking "View" opens a detailed modal with quantity selector
- Products show emoji, name, price, and description

### 2. Shopping Cart
- Click the 🛒 icon in the header to view cart
- Add/remove items and adjust quantities
- Cart automatically counts total items
- Empty cart message when no items present

### 3. Checkout Process
- Click "Proceed to Checkout" to go to payment
- Select payment method (eSewa or Bank)
- View payment details and complete purchase
- Order confirmation message upon successful payment

### 4. Price Format
- All prices are displayed in Rs. (Indian Rupees)
- Automatically formatted to 2 decimal places

## Notes

- The website uses placeholders for payment QR codes - replace with actual URLs or images
- Bank details are placeholders - add your actual bank information
- All functionality is client-side (no backend required for basic operation)
- Cart data is cleared after payment completion

## Tips

1. **Test the site**: Add items to cart, go through checkout process to ensure everything works
2. **Mobile friendly**: Test on mobile devices to see responsive design
3. **Prices**: Always set prices before going live
4. **Payment details**: Update with real payment methods before launch
5. **Logo**: Use a high-quality logo for professional appearance

## Technical Details

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Gradients, Animations
- **Vanilla JavaScript**: No dependencies required
- **LocalStorage ready**: Cart can be enhanced to use localStorage for persistence

## Future Enhancements

Here are some ideas for extending the website:

1. **Local Storage**: Save cart data between sessions
2. **Wishlist**: Allow customers to save favorite items
3. **Product Reviews**: Add customer ratings and reviews
4. **Search**: Add product search functionality
5. **Filters**: Filter by price range or category
6. **Admin Panel**: Add backend for inventory management
7. **Email Confirmation**: Send order confirmation emails
8. **Analytics**: Track customer behavior and sales

## Support

For any issues or customization help, refer to this README or the comments in the code files.

---

**GiftNest** - Where Every Gift Feels Like Home 🎁
