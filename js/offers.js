let slider = document.querySelector('.slider');
let list = document.querySelector('.list');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let items = document.querySelectorAll('.list .item');
let count = items.length;
let active = 0;  // Start at the first image (0 index)

let width_item = items[0].offsetWidth; // Get the width of one item

// Function to move to the next item
next.onclick = () => {
    active = active >= count - 1 ? 0 : active + 1;
    runCarousel();
}

// Function to move to the previous item
prev.onclick = () => {
    active = active <= 0 ? count - 1 : active - 1;
    runCarousel();
}

// Main function to update the carousel
function runCarousel() {
    // Show/hide prev and next buttons based on active item
    prev.style.display = (active == 0) ? 'none' : 'block';
    next.style.display = (active == count - 1) ? 'none' : 'block';

    // Remove 'active' class from the previously active item
    let old_active = document.querySelector('.item.active');
    if (old_active) old_active.classList.remove('active');
    
    // Add 'active' class to the current active item
    items[active].classList.add('active');

    // Translate the list to the active item
    let leftTransform = width_item * active * -1;
    list.style.transition = 'transform 0.5s ease'; // Smooth transition
    list.style.transform = `translateX(${leftTransform}px)`; // Fix: use backticks for template literal
}

// Initialize the carousel
runCarousel();

// Automatic Slide functionality
let autoSlideInterval = 2000; // Time interval for automatic sliding in milliseconds (2 seconds)

setInterval(() => {
    // Move to the next item, loop back to the first item if at the end
    active = active >= count - 1 ? 0 : active + 1;
    runCarousel();
}, autoSlideInterval);
