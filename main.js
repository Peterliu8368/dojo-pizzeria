const pizzaOven = (crustType, sauceType, cheeses, toppings) => {
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

//create first pizza
let pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

//create second pizza
let pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

//create third pizza
let pizza3 = pizzaOven("whole wheat", "vinegar", ["swiss"], ["durian"]);
console.log(pizza3);

//create third pizza
let pizza4 = pizzaOven("plain", "soy sauce", ["none"], ["steak"]);
console.log(pizza4);

const crustTypeSelection = ["deep dish", "hand tossed", "plain", "whole wheat"];
const sauceTypeSelection = ["traditional", "marinara", "vinegar", "wine"];
const cheesesSelection = ["mozzarella", "feta", "swiss", "blue cheese", "vegan cheese"];
const toppingSelection = ["pepperoni", "sausage", "durian", "olive", "extra cheese", "steak"];

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function multipleRandomPick(arr, selection) {
    for (let i = 0; i < selection.length; i++) {
        if (Math.random() <= 0.5) {
            arr.push(selection[i]);
        }
    }
}


function randomPizza() {
    let randomPizza = {};
    randomPizza.crustType = pickRandom(crustTypeSelection);
    randomPizza.sauceType = pickRandom(sauceTypeSelection);
    randomPizza.cheeses = [];
    multipleRandomPick(randomPizza.cheeses, cheesesSelection);
    randomPizza.toppings = [];
    multipleRandomPick(randomPizza.toppings, toppingSelection);


    return randomPizza;
}

let randomPizza1 = randomPizza();
console.log(randomPizza1);