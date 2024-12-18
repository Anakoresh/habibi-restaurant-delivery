document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.querySelector(".cart span");

  if (cartIcon) {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    cartIcon.textContent = itemCount;
  }
});

const burgerMenu = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

function toggleMenu() {
  document.querySelector(".burger-menu").classList.toggle("active");
  document.querySelector(".mobile-menu").classList.toggle("active");
}

function closeMenu(event) {
  const burgerMenu = document.querySelector(".burger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (
    !mobileMenu.contains(event.target) &&
    !burgerMenu.contains(event.target) &&
    mobileMenu.classList.contains("active")
  ) {
    mobileMenu.classList.remove("active");
    burgerMenu.classList.remove("active");
  }
}

window.addEventListener("click", closeMenu);
window.addEventListener("touchstart", closeMenu);

