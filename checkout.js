document.addEventListener("DOMContentLoaded", function () {  
    const cartItemsList = document.getElementById("cart-items-list");  
    const cartTotalElement = document.getElementById("cart-total");  
    const deliverySelect = document.getElementById("delivery");  
    const deliveryFeeInput = document.getElementById("delivery_fee_input");  
    const cartData = JSON.parse(localStorage.getItem("cartItems")) || [];  

    let total = 0;  

    cartItemsList.innerHTML = "";  
    cartData.forEach(item => {  
        const listItem = document.createElement("li");  
        listItem.textContent = `${item.name} - ${item.price} LKR (x${item.quantity})`;  
        cartItemsList.appendChild(listItem);  
        total += item.price * item.quantity;  
    });  

    const defaultDeliveryFee = parseInt(deliverySelect.options[deliverySelect.selectedIndex].getAttribute("data-price"));  
    deliveryFeeInput.value = defaultDeliveryFee;  
    cartTotalElement.textContent = total + defaultDeliveryFee;  
    document.getElementById("cart_data").value = JSON.stringify(cartData);  

    deliverySelect.addEventListener("change", function () {  
        const selectedOption = deliverySelect.options[deliverySelect.selectedIndex];  
        const deliveryFee = parseInt(selectedOption.getAttribute("data-price"));  
        deliveryFeeInput.value = deliveryFee;  
        cartTotalElement.textContent = total + deliveryFee;  
    });  


    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();

        localStorage.setItem("cartItems", JSON.stringify(cartData));

        document.getElementById("loading").style.display = "block";
        document.getElementById("submit_btn").style.display = "none";

        this.submit(); 
    });
});