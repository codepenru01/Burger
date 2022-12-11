let newImg = document.createElement("img");
newImg.setAttribute("src", "../burger-layers/top-bread.svg")
let addHero = document.getElementById("top");
addHero.appendChild(newImg);

let newImages = document.createElement("img");
newImages.setAttribute("src", "../burger-layers/bottom-bread.svg")
let addHere = document.getElementById("bottom");
addHere.appendChild(newImages);

let cheesea = document.querySelector(".cheese");

cheesea.addEventListener("click", function() {
    let newCheesea = document.createElement("img");
    newCheesea.setAttribute("src", "../burger-layers/cheese.svg");
    newCheesea.classList.toggle("images");
    newCheesea.style.display = "flex";
    newCheesea.style.flexDirection = "column";
    newCheesea.style.cursor = "pointer";
    let addHeres = document.getElementById("cheeses");
    addHeres.appendChild(newCheesea);
});

let meata = document.querySelector(".meat");

meata.addEventListener("click", function() {
    let newMeats = document.createElement("img");
    newMeats.setAttribute("src", "../burger-layers/meat.svg");
    newMeats.classList.toggle("images");
    newMeats.style.display = "flex";
    newMeats.style.flexDirection = "column";
    newMeats.style.cursor = "pointer";
    let adaHeres = document.getElementById("cheeses");
    adaHeres.appendChild(newMeats);
});

let oniona = document.querySelector(".onion");

oniona.addEventListener("click", function() {
    let newOnion = document.createElement("img");
    newOnion.setAttribute("src", "../burger-layers/onion.svg");
    newOnion.classList.toggle("images");
    newOnion.style.display = "flex";
    newOnion.style.flexDirection = "column";
    newOnion.style.cursor = "pointer";
    let adaHeres = document.getElementById("cheeses");
    adaHeres.appendChild(newOnion);
});

let salada = document.querySelector(".salad");

salada.addEventListener("click", function() {
    let newSalad = document.createElement("img");
    newSalad.setAttribute("src", "../burger-layers/salad.svg");
    newSalad.classList.toggle("images");
    newSalad.style.display = "flex";
    newSalad.style.flexDirection = "column";
    newSalad.style.cursor = "pointer";
    let adsHeres = document.getElementById("cheeses");
    adsHeres.appendChild(newSalad);
});

let tomatoa = document.querySelector(".tomato");

tomatoa.addEventListener("click", function() {
    let newTomato = document.createElement("img");
    newTomato.setAttribute("src", "../burger-layers/tomato.svg");
    newTomato.classList.toggle("images");
    newTomato.style.display = "flex";
    newTomato.style.flexDirection = "column";
    newTomato.style.cursor = "pointer";
    let adtHeres = document.getElementById("cheeses");
    adtHeres.appendChild(newTomato);
});

let picklea = document.querySelector(".pickle");

picklea.addEventListener("click", function() {
    let newPickle = document.createElement("img");
    newPickle.setAttribute("src", "../burger-layers/pickle.svg");
    newPickle.classList.toggle("images");
    newPickle.style.display = "flex";
    newPickle.style.flexDirection = "column";
    newPickle.style.cursor = "pointer";
    let adpHeres = document.getElementById("cheeses");
    adpHeres.appendChild(newPickle);
});