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

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    mainNav.classList.remove("bg-transparent");
    mainNav.classList.add("bg-white/30", "backdrop-blur-md", "shadow-md", "border-b", "border-white/20", "rounded-2xl", "mx-4", "mt-2");
  } else {
    mainNav.classList.remove("bg-white/30", "backdrop-blur-md", "shadow-md", "border-b", "border-white/20", "rounded-2xl", "mx-4", "mt-2");
    mainNav.classList.add("bg-transparent");
  }
});
