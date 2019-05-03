"use strict"
let shoppingCart = [];

let itemList = [
    { Name: "Matcha Tea", Price: 12 },
    { Name: "Green Peppers", Price: 3 },
    { Name: "Rice", Price: 2 },
    { Name: "Bookbag", Price: 24 },
    { Name: "Batteries", Price: 8 },
];


function addItem(itemName, itemPrice) {
    shoppingCart = [...shoppingCart, { itemName, itemPrice }];
}
addItem("G-joe", 12);
addItem("barbie", 12);
addItem("nerf", 12);
addItem("Green Tea", 5);
addItem("onion", 1);
addItem("plant", 12);
console.log(shoppingCart);



function removeItem(itemName) {
    let index = shoppingCart.findIndex(element => element.itemName === itemName);
    shoppingCart = [...shoppingCart.slice(0, index), ...shoppingCart.slice(index = 1)];
}

removeItem("G-joe");
console.log(shoppingCart);

function editItem(itemName, newName, newPrice) {
    let index = shoppingCart.findIndex(element => element.itemName === itemName);
    shoppingCart = [...shoppingCart.slice(0, index), { itemName: newName, itemPrice: newPrice }, ...shoppingCart.slice(index = 1)];
}

editItem("barbie", "Lego", 4);
editItem("nerf", "puzzel", 10);

console.log(shoppingCart);



function printTotal() {
    let total = 0;
    for (let item of shoppingCart) {
        total += item.itemPrice;
    }
    console.log(`Total:${total * 1.06}`);
}


printTotal();




