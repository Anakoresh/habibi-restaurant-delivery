function showMessage() {
  const message = document.getElementById("add-to-cart-message");
  message.style.display = "block";
  message.style.opacity = "1";

  setTimeout(() => {
    message.style.opacity = "0";
    setTimeout(() => {
      message.style.display = "none";
    }, 300);
  }, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartIcon = document.querySelector(".cart span");
  const addToCartButtons = document.querySelectorAll(
    ".food-item-info-bottom button"
  );

  updateCartIcon(cartItems.reduce((sum, item) => sum + item.quantity, 0));

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const foodItem = event.target.closest(".food-item");
      const itemName = foodItem.querySelector("h3").textContent;
      const itemPriceText = foodItem.querySelector("span").textContent;
      const itemPrice = parseInt(itemPriceText.replace(/[^\d]/g, ""));

      const existingItem = cartItems.find(
        (cartItem) => cartItem.name === itemName
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartItems.push({ name: itemName, price: itemPrice, quantity: 1 });
      }

      updateCartIcon(cartItems.reduce((sum, item) => sum + item.quantity, 0)); // Обновляем значок корзины
      saveCart();
      showMessage();
    });
  });

  function updateCartIcon(count) {
    cartIcon.textContent = count;
  }

  function saveCart() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const activeSection = document.querySelector("#food-menu a.active");

  if (activeSection) {
    activeSection.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});
