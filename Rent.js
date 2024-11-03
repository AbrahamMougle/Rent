// Récupération des éléments DOM
const container = document.getElementById('container');
const slider = document.getElementById('slider');
const dropdownMenu = document.getElementById("dropdownMenu");
const hamburgerIcon = document.querySelector(".hamburger-icon");

slider.addEventListener('input', () => {
    const value = slider.value; 
    container.style.transform = `translateX(-${value / 5}%)`;
});

document.addEventListener("DOMContentLoaded", () => {
    hamburgerIcon.addEventListener("click", () => {
        dropdownMenu.classList.toggle("show"); 
    });
});