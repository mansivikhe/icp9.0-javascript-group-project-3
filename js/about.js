const sidebarelement = document.getElementById("sidebar");
function opensidebar() {
  sidebarelement.style.visibility = "visible";
}
function close() {
  sidebarelement.style.visibility = "hiddedn";
}
const imgArray = [
  "../img/christmas.jpg",
  "../img/hygin.webp",
  "./img/buger.jpg",
  "./img/img3.jpg",
  
];
let index = 0;
const slide = document.getElementById("slide");
function next() {
  if (index < imgArray.length - 1) {
    index++;
  } else {
    index = 0;
  }
  slide.src = imgArray[index];
}
function back() {
  if (index > 0) {
    index--;
  } else {
    index = imgArray.length - 1;
  }
  slide.src = imgArray[index];
}
