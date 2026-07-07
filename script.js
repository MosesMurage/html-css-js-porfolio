function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function updatingSoon() {
    alert("🚧 This project is currently being updated. Please check back soon!");
}