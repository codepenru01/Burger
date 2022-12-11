let newImg = document.createElement("img");
newImg.setAttribute("src", "/Burger/burger-layers/top-bread.svg")
let addHero = document.getElementById("top");
addHero.appendChild(newImg);

let newImages = document.createElement("img");
newImages.setAttribute("src", "/Burger/burger-layers/bottom-bread.svg")
let addHere = document.getElementById("bottom");
addHere.appendChild(newImages);

let cheesea = document.querySelector(".cheese");

cheesea.addEventListener("click", function() {
    let newCheesea = document.createElement("img");
    newCheesea.setAttribute("src", "/Burger/burger-layers/cheese.svg")
    newCheesea.style.display = "flex";
    newCheesea.style.flexDirection = "column";
    let addHeres = document.getElementById("cheeses");
    addHeres.appendChild(newCheesea);
});

let meata = document.querySelector(".meat");

meata.addEventListener("click", function() {
    let newMeats = document.createElement("img");
    newMeats.setAttribute("src", "/Burger/burger-layers/meat.svg")
    newMeats.style.display = "flex";
    newMeats.style.flexDirection = "column";
    let adaHeres = document.getElementById("cheeses");
    adaHeres.appendChild(newMeats);
});

let oniona = document.querySelector(".onion");

oniona.addEventListener("click", function() {
    let newOnion = document.createElement("img");
    newOnion.setAttribute("src", "/Burger/burger-layers/onion.svg")
    newOnion.style.display = "flex";
    newOnion.style.flexDirection = "column";
    let adaHeres = document.getElementById("cheeses");
    adaHeres.appendChild(newOnion);
});

let salada = document.querySelector(".salad");

salada.addEventListener("click", function() {
    let newSalad = document.createElement("img");
    newSalad.setAttribute("src", "/Burger/burger-layers/salad.svg")
    newSalad.style.display = "flex";
    newSalad.style.flexDirection = "column";
    let adsHeres = document.getElementById("cheeses");
    adsHeres.appendChild(newSalad);
});

let tomatoa = document.querySelector(".tomato");

tomatoa.addEventListener("click", function() {
    let newTomato = document.createElement("img");
    newTomato.setAttribute("src", "/Burger/burger-layers/tomato.svg")
    newTomato.style.display = "flex";
    newTomato.style.flexDirection = "column";
    let adtHeres = document.getElementById("cheeses");
    adtHeres.appendChild(newTomato);
});

let picklea = document.querySelector(".pickle");

picklea.addEventListener("click", function() {
    let newPickle = document.createElement("img");
    newPickle.setAttribute("src", "/Burger/burger-layers/pickle.svg")
    newPickle.style.display = "flex";
    newPickle.style.flexDirection = "column";
    let adpHeres = document.getElementById("cheeses");
    adpHeres.appendChild(newPickle);
});