const burger = document.getElementById('burger');
const nav = document.getElementById('header_menu');

burger?.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('show');
});


function renderDishCategory(list, targetId, type) {
    const target = document.getElementById(targetId);
    target.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        target.innerHTML += dishTemplate(list, i, type);
    }
}
renderDishCategory(myDishes, 'mainDishes', 'main');
renderDishCategory(mySideDishes, 'sideDishes', 'side');

let basket = [];


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
    } renderTotal();
}
function renderBasketOverlay(){
      let basketRef = document.getElementById('basketPriceNew');
    basketRef.innerHTML = "";
    for (let i = 0; i < basket.length; i++) {
        let item = basket[i];
        basketRef.innerHTML += addtoBasketDishes(i);
    }
}

function updateBaskets(){
    renderBasket()
     renderBasketOverlay()
    }
    
function changeAmount(i, change) {
    basket[i].amount += change;
    if (basket[i].amount <= 0) {
        basket.splice(i, 1);
    } updateBaskets();
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
    } document.getElementById('resultPrice').innerHTML = basketPrice(total);
}

function deleteItem(i) {
    basket.splice(i, 1);
    updateBaskets();
}

function toggleBasket() {
    const overlay = document.getElementById('basketOverlay');

    if (overlay.style.display === "block") {
        overlay.style.display = "none";
        document.body.classList.remove("no-scroll");
    } else {
        overlay.style.display = "block";
        document.body.classList.add("no-scroll");
        renderBasketOverlay();
    }
}

function renderBasketOverlay() {
    let basketRef = document.getElementById('basketOverlayInner');
    basketRef.innerHTML = "";

    if (basket.length === 0) {
        basketRef.innerHTML = "<p>Dein Warenkorb ist leer!</p>";
        return;
    }
    basketRef.innerHTML += document.getElementById('basket').innerHTML;
    basketRef.innerHTML += document.getElementById('resultPrice').innerHTML;
}

function checkout() {
    document.getElementById('overlay').style.display = 'flex';
    basket = [];            
    updateBaskets();        
    const basketOverlay = document.getElementById('basketOverlay');
    basketOverlay.style.display = 'none';
}

function renderBasketOverlay() {
    const scroll = document.getElementById('basketOverlayScroll');
    const footer = document.getElementById('basketOverlayFooter');

    scroll.innerHTML = "";
    footer.innerHTML = "";

    if (basket.length === 0) {
        scroll.innerHTML = "<p>Dein Warenkorb ist leer!</p>";
        return;
    }
    scroll.innerHTML = document.getElementById('basket').innerHTML;
    footer.innerHTML = document.getElementById('resultPrice').innerHTML;
}