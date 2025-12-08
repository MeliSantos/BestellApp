const burger = document.getElementById('burger');
const nav = document.getElementById('header_menu');

burger?.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('show');
});

let basket = [];

function updateHTML(id, html) {
    document.getElementById(id).innerHTML = html;
};

function calculateTotal() {
    let total = 0;
    for (let i = 0; i < basket.length; i++) {
        total += basket[i].price * basket[i].amount;
    }
    return total;
};

function createBasketListHTML() {
    let html = "";
    for (let i = 0; i < basket.length; i++) {
        html += addtoBasketDishes(i);
    }
    return html;
};

function renderDishCategory(list, targetId, type) {
    const target = document.getElementById(targetId);
    target.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        target.innerHTML += dishTemplate(list, i, type);
    }
};

function init() {
    renderDishCategory(myDishes, 'mainDishes', 'main');
    renderDishCategory(mySideDishes, 'sideDishes', 'side');
};

window.onload = init;

function addToBasket(i, type) {
    const list = type === "main" ? myDishes : mySideDishes;
    const item = list[i];
    for (let x = 0; x < basket.length; x++) {
        if (basket[x].name === item.name) {
            basket[x].amount++;
            return renderAllBaskets();
        }
    }
    basket.push({
        name: item.name,
        price: item.price,
        amount: 1
    });
    renderAllBaskets();
};

function changeAmount(i, change) {
    basket[i].amount += change;
    if (basket[i].amount <= 0) basket.splice(i, 1);
    renderAllBaskets();
};

function deleteItem(i) {
    basket.splice(i, 1);
    renderAllBaskets();
};

function renderAllBaskets() {
    const listHTML = createBasketListHTML();
    const total = calculateTotal();
    const empty = "<p style='text-align:center;'>Dein Warenkorb ist leer!</p>";
    const priceHTML = basket.length ? basketPrice(total) : "";

    updateHTML("basket", basket.length ? listHTML : empty);
    updateHTML("resultPrice", priceHTML);

    updateHTML("basketOverlayScroll", basket.length ? listHTML : empty);
    updateHTML("basketOverlayFooter", priceHTML);
};

function toggleBasket() {
    const ov = document.getElementById('basketOverlay');
    const open = ov.style.display === "block";

    ov.style.display = open ? "none" : "block";
    document.body.classList.toggle("no-scroll", !open);

    if (!open) renderAllBaskets();
};

function checkout() {
    document.getElementById('overlay').style.display = 'flex';

    basket = [];
    renderAllBaskets();

    document.getElementById('basketOverlay').style.display = 'none';
    document.body.classList.remove("no-scroll");
};