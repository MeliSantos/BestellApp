function dishTemplate(list, i, type) {
    return `
        <div class="borderlineDiv">
            <div class="movePlusDiv">
                <div onclick="addToBasket(${i}, '${type}')">
                    <h3>${list[i].name}</h3>
                    <p>${list[i].description}</p>
                    <p class="orangeBold">${list[i].price} €</p>
                </div>
                <div class="plusDiv" onclick="addToBasket(${i}, '${type}')">
                    <img class="plusIMG" src="./assets/Icons/icons8-plus-24.png" alt="Zum Warenkorb Hinzufügen Zeichen">
                </div>
            </div>
        </div>`;
}


function addtoBasketDishes(i) {
    const item = basket[i];
    return `<h3 style="padding-left: 10px;" >${item.name}</h3>
                    <div class="bskContent" >
                        <img class="bskIcons" onclick="changeAmount(${i}, -1)" src="./assets/Icons/icons8-minus-24.png" alt="Minus Icon">
                        <span>${item.amount}x</span>
                        <img class="bskIcons" onclick="changeAmount(${i}, 1)" src="./assets/Icons/icons8-plus-24.png" alt="Plus Icon">
                        <span>${(item.amount * item.price).toFixed(2)} €</span>
                        <img class="bskIcons" onclick="deleteItem(${i})" src="./assets/Icons/icons8-müll-48.png" alt="Müll Icon">
                    </div>
                    <hr>`
}
function basketPrice(total) {
    return ` <div id="basketPriceNew" class="basketcontentprice">
    <div>
        <p>Zwischensumme</p>
        <p> Lieferkosten </p>
        <p style=" font-weight: bold; color: black;">Gesamt</p>
    </div>
    <div>
        <p>${total.toFixed(2)} € </p>
        <p> 5.00 € </p>
        <p style=" font-weight: bold; color: black;">${(total + 5).toFixed(2)} € </p>
    </div> </div> 
  <div class="btnPosition"><button class="btn" 
        onclick="checkout()">Bestellen</button></div>
`}
