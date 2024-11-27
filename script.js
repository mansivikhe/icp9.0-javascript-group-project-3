// to fetch Navbar and footer
document.addEventListener('DOMContentLoaded', () => {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => document.getElementById('navbar').innerHTML = data);

    fetch('footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML = data);
});

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



