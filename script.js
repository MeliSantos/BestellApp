// Bild von <a href="https://pixabay.com/de/users/my_walking_diary-16369448/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5323540">My Walking Diary</a> auf <a href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5323540">Pixabay</a> *
// Bild von <a href="https://pixabay.com/de/users/joannawielgosz-168212/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7187809">Joanna Wielgosz</a> auf <a href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7187809">Pixabay</a>
// Bild von <a href="https://pixabay.com/de/users/wow_pho-916237/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=712667">Wow Phochiangrak</a> auf <a href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=712667">Pixabay</a>
// Bild von <a href="https://pixabay.com/de/users/petrovhey-2830663/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3000274">petrovhey</a> auf <a href="https://pixabay.com/de//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3000274">Pixabay</a>
// <a target="_blank" href="https://icons8.com/icon/89230/forward">Forward</a> Icon von <a target="_blank" href="https://icons8.com">Icons8</a>
// <a target="_blank" href="https://icons8.com/icon/3220/plus">Plus</a> Icon von <a target="_blank" href="https://icons8.com">Icons8</a>
// <a target="_blank" href="https://icons8.com/icon/85458/minus">Minus</a> Icon von <a target="_blank" href="https://icons8.com">Icons8</a>

let dishList = [];
let sideDishList = [];

function mainDishes() {
    let listRef = document.getElementById('mainDishes');
    for (let i = 0; i < myDishes.length; i++) {
        let name = myDishes[i].name;
        let price = myDishes[i].price;
        let descr = myDishes[i].description;
        dishList.push(name,price,descr);
        listRef.innerHTML += dishesTemplate(i);
    }
} mainDishes();

function sideDishes() {
    let sideDishListRef = document.getElementById('sideDishes');
    for (let i = 0; i < mySideDishes.length; i++) {
        let name = myDishes[i].name;
        let price = myDishes[i].price;
        let descr = myDishes[i].description;
       sideDishList.push(name,price,descr);
       sideDishListRef.innerHTML +=  sideDishesTemplate(i);
    }
} sideDishes();









