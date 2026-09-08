let buttons = document.querySelectorAll(".btn");

let cart = document.querySelector(".cart");


// ---------------- TOTAL ----------------

let cartTotal = 0;

let total = document.createElement("div");
total.classList.add("cart-total");

let totalspan = document.createElement("span");
totalspan.textContent = "Total";

let totalstrong = document.createElement("strong");
totalstrong.textContent = "₹0";

total.append(totalspan, totalstrong);


// ---------------- CHECKOUT BUTTON ----------------

let proceedButton = document.createElement("button");
proceedButton.classList.add("checkout-btn");
proceedButton.textContent = "Proceed to Checkout";


// ---------------- ADD TO CART ----------------

buttons.forEach(button => {

    button.addEventListener("click", function () {

        let service = button.parentElement.parentElement;

        let name = service.querySelector("h3").textContent;

        let price = Number(
            service.querySelector("p").textContent.replace("₹", "")
        );

        let quantity = Number(
            service.querySelector("input").value
        );


        // Individual item ka total
        let totalprice = price * quantity;


        // Pure cart ka total
        cartTotal += totalprice;


        // Total ki value update
        totalstrong.textContent = `₹${cartTotal}`;


        // ---------------- CART ITEM ----------------

        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        let cartInfo = document.createElement("div");
        cartInfo.classList.add("cart-info");

        let serviceName = document.createElement("h3");
        serviceName.textContent = name;

        let serviceQuantity = document.createElement("p");
        serviceQuantity.textContent = `Qty: ${quantity}`;

        let priceValue = document.createElement("strong");
        priceValue.textContent = `₹${totalprice}`;


        cartInfo.append(serviceName, serviceQuantity);

        cartItem.append(cartInfo, priceValue);


        // Cart mein item + total + checkout
        cart.append(cartItem, total, proceedButton);

    });

});