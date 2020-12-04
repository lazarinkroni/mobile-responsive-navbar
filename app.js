// Get all item classes from HYML with document.querySelector

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

// Click the Hamburger to Open The manu with (addEventListener)

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link =>{
    link.classList.toggle("fade");
  });
});