let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("top-header");

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    // scrolling up → show navbar
    navbar.style.top = "0";
  } else {
    // scrolling down → hide navbar
    navbar.style.top = "-80px"; // adjust based on navbar height
  }
  prevScrollPos = currentScrollPos;
}
