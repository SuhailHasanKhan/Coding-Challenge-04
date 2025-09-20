// Coding Challenge 00

// Code goes here

let products = [
    {sku: 101, name: 'Headphones', category: 'electronics', price: 79.99, inventory: 56},
    {sku: 102, name: 'Running Shorts', category: 'apparel', price: 29.99, inventory: 77},
    {sku: 103, name: 'Ranch', category: 'groceries', price: 9.99, inventory: 102},
    {sku: 104, name: 'Toilet Paper', category: 'groceries', price: 4.99, inventory: 343},
    {sku: 105, name: 'Drill Bits', category: 'default', price: 49.99, inventory: 96},
];

for (let product of products) {
    let discount = 0
    switch(product.category) {
        case "electronics":
            discount = 0.2
            break;
        case "apparel":
            discount = 0.15
            break;
        case "groceries":
        case "household":
            discount = 0.1
            break;
        case "default":
            discount = 0
            break;
    }
    let promoPrice = product.price*(1-discount);
    product.promoPrice = promoPrice;
};

console.log(products);
let customerType = ["regular", "senior", "student"];
//const customers = [
//    {id: 1, customerType: "regular", couponCode: "SAVE10", taxRate: 0.085, cart: [{sku: 101, qty: 1}, {sku: 104, qty: 2}]},
//    {id: 2, customerType: "student", couponCode: "FREESHIP", taxRate: 0.085, cart: [{sku: 102, qty: 2}, {sku: 103, qty: 2}]},
//    {id: 3, customerType: "senior", couponCode: "", taxRate: 0.085, cart: [{sku: 104, qty: 3}, {sku: 105, qty: 3}]},
//];

let extraDiscount = 0
if (customerType === "student") { extraDiscount = 0.05; }
else if (customerType === "senior") { extraDiscount = 0.07; }
else { extraDiscount = 0; }

for (let i = 1; i <= 3; i = i + 1) {
    let subtotal = 0;

    for (const item of products) {
        subtotal = subtotal + item.promoPrice;
        if (item.inventory > 0) {
            item.inventory--;
        }
    }
    let finalTotal = subtotal * (1 - extraDiscount);
    console.log(`Customer ${i}: $${finalTotal.toFixed(2)}`);

}
console.log(products);