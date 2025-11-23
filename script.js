let dishList = [];
let sideDishList = [];

function mainDishes() {
    let listRef = document.getElementById('mainDishes');
    for (let i = 0; i < myDishes.length; i++) {
        let name = myDishes[i].name;
        let price = myDishes[i].price;
        let descr = myDishes[i].description;
        dishList.push(name, price, descr);
        listRef.innerHTML += dishesTemplate(i);
    }
} mainDishes();

function sideDishes() {
    let sideDishListRef = document.getElementById('sideDishes');
    for (let i = 0; i < mySideDishes.length; i++) {
        let name = mySideDishes[i].name;
        let price = mySideDishes[i].price;
        let descr = mySideDishes[i].description;
        sideDishList.push(name, price, descr);
        sideDishListRef.innerHTML += sideDishesTemplate(i);
    }
} sideDishes();

let basket= [];

function addToBasket(i, type) {
    let item = type === 'main' ? myDishes[i] : mySideDishes[i];
    let index = basket.findIndex(b => b.name === item.name);
    if (index === -1) {
        basket.push({
            name: item.name,
            price: item.price,
            amount: 1
        });
    } else {
        basket[index].amount++;
    } renderBasket();
}

function renderBasket() {
    let basketRef = document.getElementById('basket');
    basketRef.innerHTML = "";
    for (let i = 0; i < basket.length; i++) {
        let item = basket[i];
        basketRef.innerHTML += addtoBasketDishes(i);
    }  renderTotal();
}

function changeAmount(i, change) {
    basket[i].amount += change;
    if (basket[i].amount <= 0) {
        basket.splice(i, 1);
    }  renderBasket();
}

function renderTotal() {
    let total = 0;
    let resultRef = document.getElementById('resultPrice');
    if (basket.length === 0) {
        resultRef.innerHTML = "";
        return;
    }
    for (let item of basket) {
        total += item.amount * item.price;
    }
    document.getElementById('resultPrice').innerHTML = basketPrice(total);
}

function deleteItem(i) {
    basket.splice(i, 1);
    renderBasket();
}
