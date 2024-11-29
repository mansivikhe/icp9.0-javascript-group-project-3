function openSidebar() {
    const sidebarElement = document.getElementById('sidebar');
    sidebarElement.style.visibility = 'visible';
    const hamburgerMenuElement = document.getElementById('hamburger-menu');
    hamburgerMenuElement.style.visibility = 'hidden';
}
function closeSidebar() {
    const sidebarElement = document.getElementById('sidebar');
    sidebarElement.style.visibility = 'hidden';
    const hamburgerMenuElement = document.getElementById('hamburger-menu');
    hamburgerMenuElement.style.visibility = 'visible';
}




const quantElement = document.getElementById('quantity');
    function inc()
    {
        let quantity = parseInt(quantElement.innerText);
        quantElement.innerText = ++quantity;
    }

    function dec()
    {
        let quantity = parseInt(quantElement.innerText);
        if(quantity>1)
        {
        quantElement.innerText = --quantity;
        }
    }

    function openModel()
{
    const overlayElement = document.getElementById('overlay');
    overlayElement.style.display = 'flex';
}
function closeModel()
{
    const overlayElement = document.getElementById('overlay');
    overlayElement.style.display = 'none';
}
