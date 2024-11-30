const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
//open sidebar
openBtn.addEventListener("click", () => {
    sidebar.style.width = "250px"; 
    openBtn.style.display = "none";
  });
//close sidebar
  closeBtn.addEventListener("click", () => {
    sidebar.style.width = "0"; 
    openBtn.style.display = "block"; 
  });

  //search image
  function filterMenu(category) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
  }
  
  
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
  
  function searchMenu() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');
  
    menuItems.forEach(item => {
        const itemName = item.querySelector('h2').textContent.toLowerCase();
        if (itemName.includes(searchInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
  }
  
  