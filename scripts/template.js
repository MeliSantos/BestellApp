function dishesTemplate(i) {
    return `<div class="borderlineDiv">
        <h3>${myDishes[i].name}</h3>
        <p>${myDishes[i].description}</p>
        <p class="orangeBold">${myDishes[i].price}</p>
        </div>
    <div class="plusDiv">
            </div>
            `;
}
function sideDishesTemplate(i) {
    return `<div class="borderlineDiv">
        <h3>${mySideDishes[i].name}</h3>
        <p>${mySideDishes[i].description}</p>
        <p class="orangeBold">${mySideDishes[i].price}</p>
        </div>
    <div class="plusDiv">
            </div>
            `;

}