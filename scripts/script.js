// JavaScript Document

/* -- Hamburgermenu -- */

var hamburger = document.querySelector("body div header button");
var navMenu = document.querySelector("body div header nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("cross");
    navMenu.classList.toggle("active");
}

/* -- Intersection observer -- */

// Target element to be observed.
const observerElement = document.querySelector('section:nth-child(2)');

// Intersection Observer Configuration
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0
};

// Intersection Observer Constructor.
const observer = new IntersectionObserver( handleIntersect, observerOptions );

// Intersection Observer Callback Function
function handleIntersect(entry) {
  
  // If intersecting.
  if (entry[0].intersectionRatio > 0) {
    console.log('Element is Intersecting');
    observerElement.classList.add("testClass");
  } else {
    console.log('Element is NOT Intersecting');
    observerElement.classList.remove("testClass");
  }
};
observer.observe(observerElement);
