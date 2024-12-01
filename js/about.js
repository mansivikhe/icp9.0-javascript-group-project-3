// const sidebarelement = document.getElementById("sidebar");
// function opensidebar() {
//   sidebarelement.style.visibility = "visible";
// }
// function close() {
//   sidebarelement.style.visibility = "hiddedn";
// }
// document.addEventListener("DOMContentLoaded", () => {
const imgArray1 = [
  "../img/restaurant-hall",
  "../img/christmas.jpg",
  "../img/hygin.jpg",
  "../img/buger.jpg",
  "../img/img3.jpg",
];
let index = 0;
const slide1 = document.getElementById("slide1");

function next1() {
  if (index < imgArray1.length - 1) {
    index++;
  } else {
    index = 0;
  }
  slide1.src = imgArray1[index];
}

function back1() {
  if (index > 0) {
    index--;
  } else {
    index = imgArray1.length - 1;
  }
  slide1.src = imgArray1[index];
}

//   // Attach functions to global scope if using inline event handlers
//   window.next1 = next1;
//   window.back1 = back1;
// });
