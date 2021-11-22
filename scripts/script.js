// JavaScript Document

var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".navmenu");

function mobileMenu() {
    hamburger.classList.toggle("cross");
    navMenu.classList.toggle("active");
}

hamburger.addEventListener("click", mobileMenu);