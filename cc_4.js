// Coding Challenge 04

let products = [
    {sku: 101, name: 'Headphones', category: 'electronics', price: 79.99, inventory: 56},
    {sku: 102, name: 'Running Shorts', category: 'apparel', price: 29.99, inventory: 77},
    {sku: 103, name: 'Ranch', category: 'groceries', price: 9.99, inventory: 102},
    {sku: 104, name: 'Toilet Paper', category: 'household', price: 4.99, inventory: 343},
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


let customerType = "student";


let extraDiscount = 0
if (customerType === "student") { extraDiscount = 0.05; }
else if (customerType === "senior") { extraDiscount = 0.07; }
else { extraDiscount = 0; }

console.log("------- FINAL TOTAL PRICES --------");
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
console.log("------- Electronic Product Details --------");
const electronicProduct = products[0];
for (const details in electronicProduct) {
    console.log(`${details}: ${electronicProduct[details]}`);
}

console.log("------- Apparel Product Details --------");
const apparelProduct = products[1];
for (const [key, value] of Object.entries(apparelProduct)) {
    console.log(`${key}: ${value}`);
}