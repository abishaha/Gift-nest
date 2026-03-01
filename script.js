/* ============================================
   Product Data (Easily Editable)
   ============================================ */

const products = [
    {
        id: 1,
        name: 'Bouquet',
        price: 1000,
        image: 'product-1.png',
        description: 'Beautiful assorted flower bouquet, perfect for any occasion. Freshly arranged with premium quality flowers.'
    },
    {
        id: 2,
        name: 'Scented Candles',
        price: 699,
        image: 'product-2.png',
        description: 'Premium scented candles with natural ingredients. Perfect for creating a relaxing ambiance in any room.'
    },
    {
        id: 3,
        name: 'Surprise Boxes',
        price: 2499,
        image: 'product-3.png',
        description: 'Mystery gift boxes filled with delightful surprises. Perfect for creating memorable moments and excitement.'
    },
    {
        id: 4,
        name: 'Photo Frames',
        price: 899,
        image: 'product-4.png',
        description: 'Elegant photo frames in various sizes and designs. Customize with your favorite memories and moments.'
    },
    {
        id: 5,
        name: 'Personalized Bottle',
        price: 999,
        image: 'product-5.png',
        description: 'Custom personalized water bottles with your name or design. Durable, eco-friendly, and perfect for everyday use.'
    },
    {
        id: 6,
        name: 'Premium Watches',
        price: 2999,
        image: 'product-6.png',
        description: 'Luxury timepieces with elegant designs. Perfect blend of style, functionality, and sophisticated craftsmanship.'
    },
    {
        id: 7,
        name: 'Premium Wallets',
        price: 1299,
        image: 'product-7.png',
        description: 'High-quality leather wallets with premium finish. Durable, stylish, and perfect for daily use or gifting.'
    },
    {
        id: 8,
        name: 'Premium Body Mists',
        price: 3499,
        image: 'product-8.png',
        description: 'Luxury body mists with long-lasting fragrance. Perfect for daily wear or special occasions, leaving you refreshed and confident.'
    },
    {
        id: 9,
        name: 'Cups & Mugs',
        price: 599,
        image: 'product-9.png',
        description: 'Personalized and themed mugs for coffee or tea lovers. Great for daily use or as thoughtful gifts.'
    },
    {
        id: 10,
        name: 'Kids Toys & Puzzles',
        price: 999,
        image: 'product-10.png',
        description: 'Educational and fun toys for children. Develops creativity and problem-solving skills while entertaining.'
    },
    {
        id: 11,
        name: "Men's Perfume",
        price: 1499,
        image: 'product-11.png',
        description: 'Luxury fragrance for men with long-lasting scent. Perfect for daily wear or special occasions.'
    },
    {
        id: 12,
        name: 'Premium Sunglasses',
        price: 1999,
        image: 'product-12.png',
        description: 'Stylish UV-protected sunglasses with premium frames. Perfect for outdoor activities and everyday wear.'
    },
    {
        id: 13,
        name: '3D Moon Crystal Lamp',
        price: 699,
        image: 'product-13.png',
        description: 'Magical 3D moon-shaped crystal lamp with LED lights. Creates a beautiful ambient glow for any room.'
    },
    {
        id: 14,
        name: '4ft Teddy Bear',
        price: 5000,
        image: 'product-14.png',
        description: 'Oversized plush teddy bear, perfect for cuddling and displaying. A delightful gift for kids and adults alike.'
    }
];

/* ============================================
    DOM Elements (assigned on DOMContentLoaded)
    ============================================ */

let productsGrid;
let cartModal;
let productModal;
let checkoutModal;
let overlay;
let cartCount;
let cartIconLink;
let closeButtons;

let cart = [];

/* ============================================
   Initialize App
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // assign DOM elements after DOM is ready
    productsGrid = document.getElementById('products-grid');
    cartModal = document.getElementById('cart-modal');
    productModal = document.getElementById('product-modal');
    checkoutModal = document.getElementById('checkout-modal');
    overlay = document.getElementById('overlay');
    cartCount = document.querySelector('.cart-count');
    cartIconLink = document.querySelector('.cart-icon-link');
    closeButtons = document.querySelectorAll('.close-modal');

    renderProducts();
    setupEventListeners();
});

/* ============================================
   Render Products
   ============================================ */

function renderProducts() {
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image"><img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23ddd%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2214%22 fill=%22%23999%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EProduct Image%3C/text%3E%3C/svg%3E'"></div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">Rs. ${product.price.toFixed(2)}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="quickAddToCart(${product.id})">Add to Cart</button>
                    <button class="btn btn-secondary" onclick="viewProductDetails(${product.id})">View</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

/* ============================================
   Product Details
   ============================================ */

function viewProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const productDetail = document.getElementById('product-detail');
    productDetail.innerHTML = `
        <div class="product-detail-image"><img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23ddd%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2214%22 fill=%22%23999%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EProduct Image%3C/text%3E%3C/svg%3E'"></div>
        <div class="product-detail-info">
            <div class="product-detail-name">${product.name}</div>
            <div class="product-detail-price">Rs. ${product.price.toFixed(2)}</div>
            <div class="product-detail-description">${product.description}</div>
            <div class="quantity-selector">
                <label for="qty-${productId}">Quantity:</label>
                <input type="number" id="qty-${productId}" value="1" min="1">
            </div>
            <div class="product-detail-actions">
                <button class="btn btn-primary" onclick="addToCart(${productId})">Add to Cart</button>
                <button class="btn btn-secondary" onclick="closeModal('product-modal')">Close</button>
            </div>
        </div>
    `;
    
    openModal('product-modal');
}

/* ============================================
   Cart Functions
   ============================================ */

function quickAddToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    addItemToCart({
        ...product,
        quantity: 1,
        cartItemId: Date.now() // Unique identifier for each cart item
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const quantityInput = document.getElementById(`qty-${productId}`);
    const quantity = parseInt(quantityInput.value) || 1;
    
    addItemToCart({
        ...product,
        quantity: quantity,
        cartItemId: Date.now()
    });
    
    closeModal('product-modal');
}

function addItemToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.id === item.id && cartItem.quantity === item.quantity);
    
    if (existingItem) {
        existingItem.quantity += item.quantity;
    } else {
        cart.push(item);
    }
    
    updateCartUI();
}

function removeFromCart(cartItemId) {
    cart = cart.filter(item => item.cartItemId !== cartItemId);
    updateCartUI();
}

function updateQuantity(cartItemId, newQuantity) {
    const item = cart.find(item => item.cartItemId === cartItemId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(cartItemId);
        } else {
            item.quantity = newQuantity;
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    const cartItemsContainer = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">Rs. ${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${item.cartItemId}, ${item.quantity - 1})">−</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.cartItemId}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.cartItemId})">Remove</button>
            </div>
        `).join('');
    }
    
    updateCartTotal();
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-total').textContent = `Rs. ${total.toFixed(2)}`;
}

/* ============================================
   Checkout Functions
   ============================================ */

function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Add items before checkout.');
        return;
    }
    
    closeModal('cart-modal');
    openModal('checkout-modal');
}

function selectPayment(method) {
    const paymentDetails = document.getElementById('payment-details');
    const paymentTitle = document.getElementById('payment-title');
    const paymentInfo = document.getElementById('payment-info');
    
    if (method === 'esewa') {
        paymentTitle.textContent = 'eSewa Payment';
        paymentInfo.innerHTML = `
            <div class="payment-details-content">
                <img src="qr.png" alt="eSewa QR" class="payment-qr" onerror="this.style.display='none'" />
                <p><strong>Payment Method:</strong> eSewa Wallet</p>
                <p><strong>Amount:</strong> Rs. ${getCartTotal().toFixed(2)}</p>
                <p>📱 Scan the QR code above with your eSewa app to complete the payment.</p>
                <p style="font-size: 12px; color: #999; margin-top: 10px;">This shows qr.png from the project root. Replace with your eSewa QR image if needed.</p>
            </div>
        `;
    } else if (method === 'bank') {
        paymentTitle.textContent = 'Bank Transfer';
        paymentInfo.innerHTML = `
            <div class="payment-details-content">
                <p><strong>Payment Method:</strong> Bank Transfer</p>
                <p><strong>Amount:</strong> Rs. ${getCartTotal().toFixed(2)}</p>
                <p><strong>Bank Details:</strong></p>
                <p>Bank Name: [Your Bank Name]<br>
                Account Number: [Your Account Number]<br>
                Account Holder: GiftNest<br>
                SWIFT Code: [Swift Code]<br>
                Branch Code: [Branch Code]</p>
                <p>🏦 Or scan the QR code above for quick transfer.</p>
                <p style="font-size: 12px; color: #999; margin-top: 10px;">This is a placeholder. Replace with actual bank details and QR code for production.</p>
            </div>
        `;
    }
    
    paymentDetails.style.display = 'block';
}

function completePayment() {
    const total = getCartTotal();
    alert(`Payment of Rs. ${total.toFixed(2)} completed successfully!\n\nThank you for shopping at GiftNest.\nYour order has been confirmed.`);
    cart = [];
    updateCartUI();
    closeModal('checkout-modal');
}

function goBackToCart() {
    closeModal('checkout-modal');
    openModal('cart-modal');
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

/* ============================================
   Modal Functions
   ============================================ */

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
    overlay.classList.remove('active');
}

/* ============================================
   Event Listeners Setup
   ============================================ */

function setupEventListeners() {
    // Cart icon click
    cartIconLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('cart-modal');
    });
    
    // Close buttons
    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            closeAllModals();
        });
    });
    
    // Overlay click
    overlay.addEventListener('click', closeAllModals);
    
    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', proceedToCheckout);
    }
}

/* ============================================
   Prevent closing modal when clicking inside content
   ============================================ */

document.querySelectorAll('.modal-content').forEach(content => {
    content.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

// set footer year
document.addEventListener('DOMContentLoaded', () => {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
});
