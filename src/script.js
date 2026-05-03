const mainNav = document.getElementById("mainNav");
const mobileMenu = document.getElementById("mobileMenu");

function toggleMenu() {
  mobileMenu.classList.remove("translate-x-full");
  //   mainNav.classList.add("hidden");
  //   mobileMenu.classList.remove("hidden");
}

function closeMenu() {
  mobileMenu.classList.add("translate-x-full");

  //   mainNav.classList.remove("hidden");
  //   mobileMenu.classList.add("hidden");
}
