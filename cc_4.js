// Coding Challenge 00

// Code goes here

let products = [
    {sku: '001', name: 'Headphones', category: 'electronics', price: 79.99, inventory: 56},
    {sku: '002', name: 'Running Shorts', category: 'apparel', price: 29.99, inventory: 77},
    {sku: '003', name: 'Ranch', category: 'groceries', price: 9.99, inventory: 102},
    {sku: '004', name: 'Toilet Paper', category: 'groceries', price: 4.99, inventory: 343},
    {sku: '005', name: 'Drill Bits', category: 'default', price: 49.99, inventory: 96},
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

const customers = [
    {id: 1, customerType: "regular", couponCode: "SAVE10", taxRate: 0.085, cart: [{sku: 001, qty: 1}, {sku: 004, qty: 2}]},
    {id: 2, customerType: "student", couponCode: "FREESHIP", taxRate: 0.085, cart: [{sku: 002, qty: 2}, {sku: 003, qty: 2}]},
    {id: 3, customerType: "senior", couponCode: "", taxRate: 0.085, cart: [{sku: 004, qty: 3}, {sku: 005, qty: 3}]},
];
