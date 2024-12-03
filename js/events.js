
function openModal() {
    const divisionElement = document.getElementById('division');
    divisionElement.style.display = 'flex';
}

function closeModal() {
    const divisionElement = document.getElementById('division');
    divisionElement.style.display = 'none'; 
}

function openModel() {
    const overlayElement = document.getElementById('overlay');
    overlayElement.style.display = 'flex';
}

function closeModel() {
    const overlayElement = document.getElementById('overlay');
    overlayElement.style.display = 'none';
}


let slider = document.querySelector('.slider');
let list = document.querySelector('.list');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let items = document.querySelectorAll('.list .item');
let count = items.length;
let active = 0; 

let width_item = items[0].offsetWidth;


next.onclick = () => {
    active = active >= count - 1 ? 0 : active + 1;
    runCarousel();
}


prev.onclick = () => {
    active = active <= 0 ? count - 1 : active - 1;
    runCarousel();
}

function runCarousel() {
    
    prev.style.display = (active == 0) ? 'none' : 'block';
    next.style.display = (active == count - 1) ? 'none' : 'block';
}
     