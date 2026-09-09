let buttons = document.querySelectorAll("button");

let cart = document.querySelector(".cart");

let cartTotal = 0;

let totalDisplay = document.createElement("div");
let totalDisplaytext = document.createElement("span");
totalDisplaytext.textContent = "Total";
let totalDisplayprice = document.createElement("strong");


totalDisplay.append(totalDisplaytext, totalDisplayprice);


let proceedButton = document.createElement("button");
proceedButton.classList.add("checkout-btn");
proceedButton.innerText = "Proceed to Checkout";




buttons.forEach(button => {

    button.addEventListener("click", function () {

        cart.style.display = "block";
        let service = button.parentElement.parentElement;

        let servicename = service.querySelector("h3").textContent;
        let price = Number(service.querySelector("p").textContent.replace("₹", ""));
        let quantity = Number(service.querySelector("input").value);

        console.log(servicename);
        console.log(price);
        console.log(quantity);


        let singleServiceTotalPrice = Number(price * quantity)

        console.log(singleServiceTotalPrice);

        let cartItem2 = document.querySelectorAll(".cart-item");
        let alreadyAdded = false;

        cartItem2.forEach(item => {
            let alreadyexisting = item.querySelector("h3").textContent;

            if (alreadyexisting.includes(servicename)) {
                alreadyAdded = true;

                let updatedQuantity = Number(item.querySelector("p").textContent.split(":")[1]);

                let newquantity = Number(quantity) + Number(updatedQuantity);

                let newtotalSingleServiceTotalPrice = Number(price) * Number(newquantity);

                item.querySelector("p").textContent = `quantity: ${newquantity}`;

                item.querySelector("strong").textContent = `₹${newtotalSingleServiceTotalPrice}`


                cartTotal += Number(price) * Number(quantity);
                totalDisplayprice.textContent = `₹${cartTotal}`;
            }
        })

        if (!alreadyAdded) {
            let cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");

            let cartInfo = document.createElement("div");
            cartInfo.classList.add("cart-info");

            let serviceNameInCart = document.createElement("h3");
            serviceNameInCart.textContent = servicename;

            let quantityInCart = document.createElement("p");
            quantityInCart.textContent = `quantity: ${quantity}`;

            let priceInCart = document.createElement("strong");
            priceInCart.textContent = `₹${price}`;

            cartTotal += Number(price) * Number(quantity);
            cartInfo.append(serviceNameInCart, quantityInCart);
            cartItem.append(cartInfo, priceInCart);
            cart.append(cartItem, totalDisplay, proceedButton);


            totalDisplayprice.textContent = `₹${cartTotal}`;
        }


    })

})