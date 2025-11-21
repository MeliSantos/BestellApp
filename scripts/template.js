function dishesTemplate(i) {
    return `<div class="borderlineDiv">
         <div class="movePlusDiv">
          <h3>${myDishes[i].name}</h3>
          <p>${myDishes[i].description}</p>
          <p class="orangeBold">${myDishes[i].price}</p>
          <div class="plusDiv"><img class="plusIMG" src="./assets/Icons/icons8-plus-24.png" alt="Zum Warenkorb Hinzufügen Zeichen">
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
        <div class="plusDiv"><img class="plusIMG" src="./assets/Icons/icons8-plus-24.png" alt="Zum Warenkorb Hinzufügen Zeichen">
         </div>
         </div>
        </div>
            `;

}