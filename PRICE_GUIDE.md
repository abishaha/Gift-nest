# GiftNest Product Price Guide

Update prices in this file, then copy them to `script.js`

## Quick Price Reference

Edit the `price` field in `script.js` for each product. Current prices are set to 0 (you can set them manually).

### Product Price List

| ID | Product Name | Current Price | Your Price |
|----|--------------|---------------|-----------|
| 1 | Bouquet | Rs. 0.00 | Rs. _____ |
| 2 | Posters | Rs. 0.00 | Rs. _____ |
| 3 | Surprise Boxes | Rs. 0.00 | Rs. _____ |
| 4 | Photo Frames | Rs. 0.00 | Rs. _____ |
| 5 | Polaroid Photos | Rs. 0.00 | Rs. _____ |
| 6 | Premium Watches | Rs. 0.00 | Rs. _____ |
| 7 | Premium Wallets | Rs. 0.00 | Rs. _____ |
| 8 | Perfumes | Rs. 0.00 | Rs. _____ |
| 9 | Cups & Mugs | Rs. 0.00 | Rs. _____ |
| 10 | Kids Toys & Puzzles | Rs. 0.00 | Rs. _____ |
| 11 | Gift Hampers | Rs. 0.00 | Rs. _____ |

## How to Update Prices in script.js

Open `script.js` and find this section at the top:

```javascript
const products = [
    {
        id: 1,
        name: 'Bouquet',
        price: 0,  // ← Change 0 to your price here
        emoji: '💐',
        description: 'Beautiful assorted flower bouquet, perfect for any occasion...'
    },
    {
        id: 2,
        name: 'Posters',
        price: 0,  // ← Change 0 to your price here
        emoji: '🎨',
        description: 'Trendy wall posters with various themes...'
    },
    // ... continue for all products
];
```

## Example Prices (You can use these as reference)

If you need reference prices, here are some suggestions:

- Bouquet: 299 - 599 Rs.
- Posters: 99 - 299 Rs.
- Surprise Boxes: 499 - 1999 Rs.
- Photo Frames: 199 - 999 Rs.
- Polaroid Photos: 49 - 199 Rs. (per piece)
- Premium Watches: 2999 - 9999 Rs.
- Premium Wallets: 799 - 2999 Rs.
- Perfumes: 999 - 4999 Rs.
- Cups & Mugs: 149 - 499 Rs.
- Kids Toys & Puzzles: 299 - 999 Rs.
- Gift Hampers: 1999 - 4999 Rs.

## Product Descriptions (Easy to Customize)

All descriptions in `script.js` can be easily edited. Find each product and modify the `description` field:

```javascript
{
    id: 1,
    name: 'Bouquet',
    price: 499,
    emoji: '💐',
    description: 'Your custom description here' // ← Edit this line
}
```

### Current Descriptions

1. **Bouquet**: "Beautiful assorted flower bouquet, perfect for any occasion. Freshly arranged with premium quality flowers."

2. **Posters**: "Trendy wall posters with various themes - quotes, art, movies. High-quality printing on premium paper."

3. **Surprise Boxes**: "Mystery gift boxes filled with delightful surprises. Perfect for creating memorable moments and excitement."

4. **Photo Frames**: "Elegant photo frames in various sizes and designs. Customize with your favorite memories and moments."

5. **Polaroid Photos**: "Instant film photography prints with vintage charm. Capture and preserve your precious moments instantly."

6. **Premium Watches**: "Luxury timepieces with elegant designs. Perfect blend of style, functionality, and sophisticated craftsmanship."

7. **Premium Wallets**: "High-quality leather wallets with premium finish. Durable, stylish, and perfect for daily use or gifting."

8. **Perfumes**: "Exotic fragrances with long-lasting scent. Choose from fresh, floral, or woody notes for your preference."

9. **Cups & Mugs**: "Personalized and themed mugs for coffee or tea lovers. Great for daily use or as thoughtful gifts."

10. **Kids Toys & Puzzles**: "Educational and fun toys for children. Develops creativity and problem-solving skills while entertaining."

11. **Gift Hampers**: "Curated collection of premium items in beautiful baskets. Perfect for corporate gifts or special occasions."

---

**Remember to save your changes in `script.js` after updating prices or descriptions!**
