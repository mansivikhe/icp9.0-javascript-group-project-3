// const sidebarelement = document.getElementById("sidebar");
// function opensidebar() {
//   sidebarelement.style.visibility = "visible";
// }
// function close() {
//   sidebarelement.style.visibility = "hiddedn";
// }
// document.addEventListener("DOMContentLoaded", () => {
function read() {
  let overlayid = document.getElementById("overlayid");
  overlayid.style.display = "flex";
}
function closeModel() {
  overlayid.style.display = "none";
}
function acceptBtn() {
  alert("Thank you for visiting !...");
  overlayid.style.display = "none";
}
function dectBtn() {
  overlayid.style.display = "none";
}
let imgArray1 = [
  "../img/restaurant-hall",
  "../img/christmas.jpg",
  "../img/hygin.jpg",
  "../img/buger.jpg",
  "../img/img3.jpg",
];
let index = 0;
let slide1 = document.getElementById("imgslide");
console.log(slide1);
console.log(slide1);
console.log(slide1);
// let nextSlide = document.getElementById("nextSlide");
// let main_container = document.getElementById("main_container");
function nextSlide() {
  if (index < imgArray1.length - 1) {
    index++;
  } else {
    index = 0;
  }
  slide1.src = imgArray1[index];
}

function prevSlide() {
  if (index > 0) {
    index--;
  } else {
    index = imgArray1.length - 1;
  }
  slide1.src = imgArray1[index];
}

function localstoragesend() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const message = document.getElementById("message").value;
  if (
    name != "null" &&
    email != "null" &&
    contact != "null" &&
    message != "null"
  ) {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", contact);
    localStorage.setItem("message", message);
    alert("Thank You for visiting!");
  } else {
    alert("All fields are required");
  }
}
