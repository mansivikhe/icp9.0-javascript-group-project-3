// Inject the navbar dynamically
document.getElementById("navbar").innerHTML = `
    <div class="navbar-container">
        <img src="../img/bg.png" alt="Logo" class="navbar-logo">
        <div class="navbar-links">
            <a href="../index.html">Home</a>
            <a href="/pages/menu.html">Menu</a>
            <a href="/pages/about.html">About Us</a>
            <a href="/pages/order.html">Order Online</a>
            <a href="/pages/reviews.html">Reviews</a>
            <a href="/pages/events.html">Events</a>
            <a href="/pages/reservation.html">Reservation</a>
        </div>
    </div>  
`;

// Inject the footer dynamically
document.getElementById("footer").innerHTML = `
    <footer class="footer">
        <p>&copy; 2024 Food Restaurant. All rights reserved.</p>
    </footer>
`;


// Typewriter effect
const text = "Welcome to HOT N' FAST Restaurant";
let i = 0;
const typingSpeed = 100;
function typeWriter() {
    if (i < text.length) {
        document.querySelector('.hero-content h1').textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    }
}
typeWriter();



