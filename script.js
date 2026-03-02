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
let reviews = {}; // Store reviews by product ID
let orders = []; // Store orders
let currentProductId = null; // Track current product being reviewed
let orderDetails = {}; // Store current order details
let currentRating = 0; // Track current star rating

// Initialize reviews from localStorage
if (localStorage.getItem('giftnest-reviews')) {
    reviews = JSON.parse(localStorage.getItem('giftnest-reviews'));
}

// Initialize orders from localStorage
if (localStorage.getItem('giftnest-orders')) {
    orders = JSON.parse(localStorage.getItem('giftnest-orders'));
}

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
    
    // Setup order form submission
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            orderDetails = {
                name: document.getElementById('order-name').value,
                email: document.getElementById('order-email').value,
                phone: document.getElementById('order-phone').value,
                address: document.getElementById('order-address').value,
                delivery: document.getElementById('order-delivery').value,
                message: document.getElementById('order-message').value
            };
            
            closeModal('order-details-modal');
            openModal('checkout-modal');
        });
    }
    
    // Set footer year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
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
    
    currentProductId = productId;
    currentRating = 0;
    
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
    
    // Render reviews
    renderReviews(productId);
    
    // Setup star rating input
    setupStarRatingInput();
    
    openModal('product-modal');
}

/* ============================================
   Reviews & Ratings
   ============================================ */

function renderReviews(productId) {
    const reviewsList = document.getElementById('reviews-list');
    const productReviews = reviews[productId] || [];
    
    if (productReviews.length === 0) {
        reviewsList.innerHTML = '<p class="no-reviews">No reviews yet. Be the first to review!</p>';
    } else {
        const avgRating = (productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length).toFixed(1);
        
        reviewsList.innerHTML = `
            <div class="reviews-summary">
                <div class="avg-rating">
                    <div class="avg-rating-number">${avgRating}</div>
                    <div class="avg-rating-stars">${generateStars(Math.round(avgRating))}</div>
                    <div class="avg-rating-count">${productReviews.length} reviews</div>
                </div>
            </div>
            <div class="reviews-items">
                ${productReviews.map(review => `
                    <div class="review-item">
                        <div class="review-header">
                            <div class="review-author">${review.author}</div>
                            <div class="review-rating">${generateStars(review.rating)}</div>
                        </div>
                        <div class="review-text">${review.text}</div>
                        <div class="review-date">${new Date(review.date).toLocaleDateString()}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

function setupStarRatingInput() {
    const stars = document.querySelectorAll('.star-rating-input .star');
    const ratingInput = document.getElementById('review-rating');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.dataset.rating;
            ratingInput.value = rating;
            currentRating = rating;
            
            // Update visual state
            stars.forEach(s => {
                if (s.dataset.rating <= rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
        
        // Hover effect
        star.addEventListener('mouseover', function() {
            const hoverRating = this.dataset.rating;
            stars.forEach(s => {
                if (s.dataset.rating <= hoverRating) {
                    s.classList.add('hover');
                } else {
                    s.classList.remove('hover');
                }
            });
        });
    });
    
    document.querySelector('.star-rating-input').addEventListener('mouseout', function() {
        stars.forEach(s => s.classList.remove('hover'));
    });
}

function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? '★' : '☆';
    }
    return stars;
}

function submitReview() {
    const rating = parseInt(document.getElementById('review-rating').value);
    const reviewText = document.getElementById('review-text').value.trim();
    const reviewerName = document.getElementById('reviewer-name').value.trim();
    
    if (!rating || rating < 1 || rating > 5) {
        alert('Please select a rating (1-5 stars)');
        return;
    }
    
    if (!reviewText) {
        alert('Please write a review');
        return;
    }
    
    if (!reviewerName) {
        alert('Please enter your name');
        return;
    }
    
    if (!reviews[currentProductId]) {
        reviews[currentProductId] = [];
    }
    
    reviews[currentProductId].push({
        author: reviewerName,
        rating: rating,
        text: reviewText,
        date: new Date().toISOString()
    });
    
    // Save to localStorage
    localStorage.setItem('giftnest-reviews', JSON.stringify(reviews));
    
    // Clear form
    document.getElementById('review-rating').value = 0;
    document.getElementById('review-text').value = '';
    document.getElementById('reviewer-name').value = '';
    document.querySelectorAll('.star-rating-input .star').forEach(s => s.classList.remove('active'));
    
    // Refresh reviews
    renderReviews(currentProductId);
    alert('Thank you for your review!');
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
    openModal('order-details-modal');
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
    
    // Generate order ID
    const date = new Date();
    const orderId = `ORD-${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}-${String(orders.length + 1).padStart(3, '0')}`;
    
    // Create order object
    const order = {
        orderId: orderId,
        date: new Date().toISOString(),
        customerName: orderDetails.name,
        email: orderDetails.email,
        phone: orderDetails.phone,
        address: orderDetails.address,
        delivery: orderDetails.delivery,
        giftMessage: orderDetails.message,
        items: [...cart],
        total: total,
        status: 'confirmed',
        timeline: {
            confirmed: new Date().toISOString(),
            processing: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // 2 hours later
            shipped: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 1 day later
            delivered: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() // 5 days later
        }
    };
    
    orders.push(order);
    localStorage.setItem('giftnest-orders', JSON.stringify(orders));
    
    alert(`Payment of Rs. ${total.toFixed(2)} completed successfully!\n\nYour Order ID: ${orderId}\n\nThank you for shopping at GiftNest!\nYour order has been confirmed.`);
    
    cart = [];
    orderDetails = {};
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
   Order Tracking Functions
   ============================================ */

function searchOrder() {
    const orderId = document.getElementById('tracking-order-id').value.trim().toUpperCase();
    
    if (!orderId) {
        alert('Please enter an Order ID');
        return;
    }
    
    const order = orders.find(o => o.orderId === orderId);
    
    if (!order) {
        alert('Order not found. Please check the Order ID and try again.');
        return;
    }
    
    displayOrderTracking(order);
}

function displayOrderTracking(order) {
    const trackingResult = document.getElementById('tracking-result');
    const now = new Date();
    
    // Determine current status
    let currentStatus = 'confirmed';
    if (now >= new Date(order.timeline.delivered)) {
        currentStatus = 'delivered';
    } else if (now >= new Date(order.timeline.shipped)) {
        currentStatus = 'shipped';
    } else if (now >= new Date(order.timeline.processing)) {
        currentStatus = 'processing';
    }
    
    // Update status display
    const statusMap = {
        confirmed: { color: '#27ae60', text: '✓ Order Confirmed' },
        processing: { color: '#f39c12', text: '⚙ Processing' },
        shipped: { color: '#3498db', text: '📦 Shipped' },
        delivered: { color: '#27ae60', text: '✓ Delivered' }
    };
    
    const statusInfo = statusMap[currentStatus];
    document.getElementById('order-status').innerHTML = `<span style="color: ${statusInfo.color}; font-weight: bold;">${statusInfo.text}</span>`;
    document.getElementById('track-order-id').textContent = order.orderId;
    
    // Update timeline steps
    updateTimelineStep('confirmed', order.timeline.confirmed, currentStatus);
    updateTimelineStep('processing', order.timeline.processing, currentStatus);
    updateTimelineStep('shipped', order.timeline.shipped, currentStatus);
    updateTimelineStep('delivered', order.timeline.delivered, currentStatus);
    
    trackingResult.style.display = 'block';
}

function updateTimelineStep(step, date, currentStatus) {
    const marker = document.getElementById(step + '-marker');
    const dateElement = document.getElementById('track-' + step + '-date');
    
    const stepOrder = { confirmed: 0, processing: 1, shipped: 2, delivered: 3 };
    const currentStatusOrder = { confirmed: 0, processing: 1, shipped: 2, delivered: 3 };
    
    if (stepOrder[step] <= currentStatusOrder[currentStatus]) {
        marker.classList.add('completed');
    } else {
        marker.classList.remove('completed');
    }
    
    const formattedDate = new Date(date).toLocaleDateString() + ' ' + new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    dateElement.textContent = formattedDate;
}

function openMyOrders() {
    const myOrdersList = document.getElementById('my-orders-list');
    
    if (orders.length === 0) {
        myOrdersList.innerHTML = '<p class="no-orders">No orders found.</p>';
        return;
    }
    
    myOrdersList.innerHTML = orders.map(order => `
        <div class="my-order-item">
            <div class="order-item-header">
                <div class="order-item-id">${order.orderId}</div>
                <div class="order-item-status" style="color: ${getStatusColor(order.status)}">${order.status.toUpperCase()}</div>
            </div>
            <div class="order-item-info">
                <p><strong>Customer:</strong> ${order.customerName}</p>
                <p><strong>Date:</strong> ${new Date(order.date).toLocaleDateString()}</p>
                <p><strong>Total:</strong> Rs. ${order.total.toFixed(2)}</p>
                <p><strong>Delivery:</strong> ${order.delivery}</p>
            </div>
            <button class="btn btn-small btn-primary" onclick="viewOrderDetails('${order.orderId}')">View Details</button>
        </div>
    `).join('');
}

function viewOrderDetails(orderId) {
    const order = orders.find(o => o.orderId === orderId);
    if (!order) return;
    
    displayOrderTracking(order);
    closeModal('my-orders-modal');
}

function getStatusColor(status) {
    const colors = {
        confirmed: '#27ae60',
        processing: '#f39c12',
        shipped: '#3498db',
        delivered: '#27ae60'
    };
    return colors[status] || '#333';
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

