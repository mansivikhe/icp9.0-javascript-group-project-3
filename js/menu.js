const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
//open sidebar
openBtn.addEventListener("click", () => {
    sidebar.style.width = "250px"; 
    openBtn.style.display = "none";
  });