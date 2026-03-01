<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>GiftNest - Share Love</title>
<style>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #fff0f5;
    color: #333;
}

/* Header */
header {
    background-color: #ff4d6d;
    color: white;
    padding: 20px;
    text-align: center;
}

header h1 { margin: 0; }
header p { margin: 5px 0 0 0; font-size: 16px; }

/* Navigation */
nav {
    background-color: #333;
    padding: 10px;
    text-align: center;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 15px;
    font-weight: bold;
}

nav a:hover { color: #ff4d6d; }

/* Cart */
.cart {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #ff4d6d;
    color: white;
    padding: 10px 15px;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bold;
}

/* Sections */
section { padding: 40px 20px; }
section h2 { text-align: center; margin-bottom: 30px; color: #ff4d6d; }

.products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.card {
    background: white;
    width: 220px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    text-align: center;
    padding: 15px;
    transition: transform 0.2s;
}

.card:hover { transform: translateY(-5px); }

.card img { width: 100%; border-radius: 10px; }
.card h3 { margin: 10px 0 5px 0; }
.card p { margin: 5px 0; }
.card button {
    background-color: #ff4d6d;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
}

.card button:hover { background-color: #e63956; }

/* Footer */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 15px;
}

/* Responsive */
@media(max-width: 600px) {
    .products { flex-direction: column; align-items: center; }
}
</style>
</head>
<body>

<!-- Header -->
<header>
    <h1>🎁 GiftNest</h1>
    <p>Make Every Moment Special</p>
</header>

<!-- Cart -->
<div class="cart" onclick="viewCart()">Cart: <span id="cart-count">0</span></div>

<!-- Navigation -->
<nav>
    <a href="#father">Father</a>
    <a href="#mother">Mother</a>
    <a href="#friends">Friends</a>
    <a href="#love">Loved Ones</a>
</nav>

<!-- Gifts Sections -->
<section id="father">
    <h2>👨 Gifts for Father</h2>
    <div class="products">
        <div class="card">
            <img src="https://via.placeholder.com/200x150?text=Watch" alt="Watch">
            <h3>Classic Watch</h3>
            <p>Price: 2500</p>
            <button onclick="addToCart('Classic Watch', 2500)">Add to Cart</button>
        </div>
        <div class="card">
            <img src="https://via.placeholder.com/200x150?text=Wallet" alt="Wallet">
            <h3>Leather Wallet</h3>
            <p>Price: 1200</p>
            <button onclick="addToCart('Leather Wallet', 1200)">Add to Cart</button>
        </div>
    </div>
</section>

<section id="mother">
    <h2>👩 Gifts for Mother</h2>
    <div class="products">
        <div class="card">
            <img src="https://via.placeholder.com/200x150?text=Jewelry" alt="Jewelry">
            <h3>Elegant Jewelry</h3>
            <p>Price: 3000</p>
            <button onclick="addToCart('Elegant Jewelry', 3000)">Add to Cart</button>
        </div>
        <div class="card">
            <img src="https://via.placeholder.com/200x150?text=Handbag" alt="Handbag">
            <h3>Stylish Handbag</h3>
            <p>Price: 2000</p>
            <button onclick="addToCart('Stylish Handbag', 2000)">Add to Cart</button>
        </div>
    </div>
</section>

<section id="friends">
    <h2>👫 Gifts for Friends</h2>
    <div class="products">
        <div class="card">
            <img src="https://via.placeholder.com/200x150?text=Photo+Frame" alt="Photo Frame">
            <h3>Photo Frame</h3>
            <p>Price: 800</p>
            <button onclick="addToCart('Photo Frame', 800)">Add to Cart</button>
        </div>
        <div class="card">
            <img src="https://via.placeholder.com/200x150?text=Chocolate+Box" alt="Chocolate Box">
            <h3>Chocolate Box</h3>
            <p>Price: 1500</p>
            <button onclick="addToCart('Chocolate Box', 1500)">Add to Cart</button>
        </div>
    </div>
</section>

<section id="love">
    <h2>❤️ Gifts for Loved Ones</h2>
    <div class="products">
        <div class="card">
            <img src="https://via.placeholder.com/200x150?text=Couple+Mug" alt="Couple Mug">
            <h3>Couple Mug</h3>
            <p>Price: 1000</p>
            <button onclick="addToCart('Couple Mug', 1000)">Add to Cart</button>
        </div>
        <div class="card">
            <img src="https://via.placeholder.com/200x150?text=Teddy+Bear" alt="Teddy Bear">
            <h3>Teddy Bear</h3>
            <p>Price: 1800</p>
            <button onclick="addToCart('Teddy Bear', 1800)">Add to Cart</button>
        </div>
    </div>
</section>

<!-- Footer -->
<footer>
    <p>© 2026 GiftNest | Spread Love Everywhere 💖</p>
</footer>

<!-- JavaScript -->
<script>
let cart = [];

function addToCart(productName, price){
    cart.push({name: productName, price: price});
    document.getElementById('cart-count').textContent = cart.length;
    alert(productName + " added to cart!");
}

function viewCart(){
    if(cart.length === 0){
        alert("Your cart is empty!");
        return;
    }
    let cartDetails = "🛒 Your Cart:\n\n";
    let total = 0;
    cart.forEach((item, index) => {
        cartDetails += (index+1) + ". " + item.name + " - Rs. " + item.price + "\n";
        total += item.price;
    });
    cartDetails += "\nTotal: Rs. " + total;
    alert(cartDetails);
}
</script>

</body>
</html>

