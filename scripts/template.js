function dishesTemplate(i) {
    return `<div class="borderlineDiv">
         <div class="movePlusDiv">
          <h3>${myDishes[i].name}</h3>
          <p>${myDishes[i].description}</p>
          <p class="orangeBold">${myDishes[i].price}</p>
          <div class="plusDiv" onclick="addToBasket(${i}, 'main')"><img class="plusIMG" src="./assets/Icons/icons8-plus-24.png" alt="Zum Warenkorb Hinzufügen Zeichen">
         </div>
         </div>
        </div>
            `;
}
function sideDishesTemplate(i) {
    return `<div class="borderlineDiv">
        <div class="movePlusDiv">
          <h3>${mySideDishes[i].name}</h3>
           <p>${mySideDishes[i].description}</p>
           <p class="orangeBold">${mySideDishes[i].price}</p>
        <div class="plusDiv" onclick="addToBasket(${i}, 'side')"><img class="plusIMG" src="./assets/Icons/icons8-plus-24.png" alt="Zum Warenkorb Hinzufügen Zeichen">
         </div>
         </div>
        </div>
            `;

}
function addtoBasketDishes(i) {
    const item = basket[i];
    return `<h3>${item.name}</h3>
                    <div class="bskContent" >
                        <img class="bskIcons" onclick="changeAmount(${i}, -1)" src="./assets/Icons/icons8-minus-24.png" alt="Minus Icon">
                        <span>${item.amount}x</span>
                        <img class="bskIcons" onclick="changeAmount(${i}, 1)" src="./assets/Icons/icons8-plus-24.png" alt="Plus Icon">
                        <span>${(item.amount * item.price).toFixed(2)} €</span>
                        <img class="bskIcons" onclick="deleteItem(${i})" src="./assets/Icons/icons8-müll-48.png" alt="Müll Icon">
                    </div>`
}
function basketPrice(total) {
    return ` <table>
                        <tr>
                            <td> Zwischensumme </td>
                            <td style="padding-left: 120px;"> ${total.toFixed(2)} € </td>
                        </tr>
                        <tr>
                            <td> Lieferkosten </td>
                            <td style="padding-left: 127px;"> 5.00 € </td>
                        </tr>
                        <tr>
                            <td> Gesamt </td>
                            <td style="padding-left: 120px;"> ${(total + 5).toFixed(2)} € </td>
                        </tr>
                    </table>`
}
