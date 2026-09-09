let buttons = document.querySelectorAll("button");

let cart = document.querySelector(".cart")

let cartTotal = 0;

let totalShowSection = document.createElement("div");

totalShowSection.classList.add("cart-total");

let spanOfTotal = document.createElement("span");

spanOfTotal.textContent = "Total";

let strongOfTotal = document.createElement("strong");

totalShowSection.append(spanOfTotal, strongOfTotal);


let proceedButton = document.createElement("button");

proceedButton.classList.add("checkout-btn");

proceedButton.textContent = "Proceed to Checkout";


buttons.forEach(button => {

    button.addEventListener("click", function () {

        cart.style.display = "block";

        let service = button.parentElement.parentElement;

        let servicname = service.querySelector("h3").textContent;

        let price = service.querySelector("p").textContent.replace("₹", "");

        let quantity = service.querySelector("input").value;

        let total = Number(price * quantity);


        // Cart me pehle se items ko check karo
        let cartItems = document.querySelectorAll(".cart-item");

        let alreadyAdded = false;


        cartItems.forEach(item => {

            let existingName = item.querySelector("h3").textContent;


            if (existingName.includes(servicname)) {

                alreadyAdded = true;

                let existingQuantity = item
                    .querySelector("p")
                    .textContent
                    .split(":")[1];

                let newQuantity =
                    Number(existingQuantity) + Number(quantity);


                let newTotal = Number(price) * newQuantity;


                item.querySelector("p").textContent =
                    `Quntity: ${newQuantity}`;

                item.querySelector("strong").textContent =
                    `₹${newTotal}`;


                cartTotal += Number(price) * Number(quantity);

                strongOfTotal.textContent = `₹${cartTotal}`;
            }

        });


        // Agar service pehli baar add hui hai
        if (!alreadyAdded) {

            cartTotal += total;

            strongOfTotal.textContent = `₹${cartTotal}`;


            let cartItem = document.createElement("div");

            cartItem.classList.add("cart-item");


            let cartInfo = document.createElement("div");

            cartInfo.classList.add("cart-info");


            let nameOfService = document.createElement("h3");

            nameOfService.textContent = servicname;


            let quantityOfService = document.createElement("p")

            quantityOfService.textContent =
                `Quntity: ${quantity}`;


            let strong = document.createElement("strong");

            strong.textContent = `₹${total}`;


            cartInfo.append(nameOfService, quantityOfService);

            cartItem.append(cartInfo, strong);

            cart.append(
                cartItem,
                totalShowSection,
                proceedButton
            );
        }

    })

})