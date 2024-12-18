document.addEventListener("DOMContentLoaded", function () {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");
  const clearCartButton = document.getElementById("clear-cart");
  const cartIcon = document.querySelector(".cart span"); 

  updateCartDisplay();

  clearCartButton.addEventListener("click", function () {
    cartItems = [];
    updateCartDisplay();
    saveCart();
    updateCartIcon(0); 
  });

  function updateCartDisplay() {
    cartItemsContainer.innerHTML = "";
    let totalPrice = 0;

    cartItems.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name} - ${item.price} LKR (x${item.quantity})`;

      const incrementBtn = document.createElement("button");
      incrementBtn.textContent = "+";
      incrementBtn.classList.add("quantity-btn");
      incrementBtn.onclick = () => updateQuantity(item.name, 1);

      const decrementBtn = document.createElement("button");
      decrementBtn.textContent = "-";
      decrementBtn.classList.add("quantity-btn");
      decrementBtn.onclick = () => updateQuantity(item.name, -1);

      listItem.appendChild(incrementBtn);
      listItem.appendChild(decrementBtn);

      cartItemsContainer.appendChild(listItem);
      totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = `TOTAL: ${totalPrice} LKR`;
    updateCartIcon(cartItems.reduce((sum, item) => sum + item.quantity, 0)); 
  }

  function updateQuantity(itemName, amount) {
    const item = cartItems.find((cartItem) => cartItem.name === itemName);
    if (item) {
      item.quantity += amount;

      if (item.quantity <= 0) {
        cartItems = cartItems.filter((cartItem) => cartItem.name !== itemName);
      }

      updateCartDisplay();
      saveCart();
    }
  }

  function updateCartIcon(count) {
    cartIcon.textContent = count; 
  }

  function saveCart() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
});

document.getElementById("checkout").addEventListener("click", function () {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  window.location.href = "checkout.html";
});
