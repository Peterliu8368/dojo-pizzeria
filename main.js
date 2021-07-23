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
const cheesesSelection = ["mozzarella", "feta", "swiss"];
const toppingSelection = ["pepperoni", "sausage", "durian", "ovlive", "extra cheese", "steak"];

function randomPizza() {
    let randomPizza = {};
    randomPizza.crustType = crustTypeSelection[Math.floor(Math.random() * crustTypeSelection.length)];
    randomPizza.sauceType = sauceTypeSelection[Math.floor(Math.random() * sauceTypeSelection.length)];
    randomPizza.cheeses = cheesesSelection[Math.floor(Math.random() * cheesesSelection.length)];
    randomPizza.toppings = toppingSelection[Math.floor(Math.random() * toppingSelection.length)];

    return randomPizza;
}

let randomPizza1 = randomPizza();
console.log(randomPizza1);