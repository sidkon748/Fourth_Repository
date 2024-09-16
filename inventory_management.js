//Task 1
//Create an Inventory Array of Product Objects
//Inventory for products and associated details
const inventory = [
    { name: 'Watch', price: 110, quantity: 100, lowStockLevel: 25 },   
    { name: 'Television', price: 420, quantity: 53, lowStockLevel: 21 },  
    { name: 'Chair', price: 50, quantity: 79, lowStockLevel: 17 }, 
    { name: 'Table', price: 90, quantity: 56, lowStockLevel: 58 },  
    { name: 'Bookshelf', price: 150, quantity: 38, lowStockLevel: 10 },
    { name: 'Sofa', price: 120, quantity: 95, lowStockLevel: 37 },   
    { name: 'Clock', price: 70, quantity: 37, lowStockLevel: 18 },  
    { name: 'Desk', price: 40, quantity: 45, lowStockLevel: 55 }, 
    { name: 'Computer', price: 50, quantity: 56, lowStockLevel: 7 },  
    { name: 'Lamp', price: 70, quantity: 38, lowStockLevel: 11 }     
];

//Task 2
//Create a Function to Display Product Details
function displayProductDetails() {
    for (let i = 0; i < inventory.length; i++){
        const {name, price, quantity, lowStockLevel} = inventory[i]; // For loop constant for inventory product details
        const stockStatus = quantity <= lowStockLevel ? "Low Stock" : "In Stock"; 
        // Logs details of each product
        console.log(`Product Name: ${name}, Product Price: $${price}`);
        console.log(`Product Stock Status: ${stockStatus}, Product Quantity: ${quantity}`);
        console.log(`********** Product Details Displayed Above **********`);
    }
}
displayProductDetails(); //Runs function

// Task 3
// Create a Function to Update Stock
function updateStock(productName, unitsSold) {
    let productPresent = false;

    for (const item of inventory) {
        if (item.name === productName) {
            item.quantity -= unitsSold; // Update quantity

            // Determine stock status based on updated quantity
            let stockStatus;
            if (item.quantity < 1) {
                stockStatus = "Out of Stock";
            } else if (item.quantity < item.lowStockLevel) {
                stockStatus = "Low Stock";
            } else {
                stockStatus = "In Stock";
            }

            // Log updated stock 
            console.log(`Product Name: ${item.name}, Updated Stock Status: ${stockStatus}, and Updated Quantity: ${item.quantity}`);
    return;
}
}
console.log(`${productName} not available`);

}
//Uses functions to update product quantities for logged products
updateStock('Clock', 18);
updateStock('Watch', -37);
updateStock('Television', 3);
updateStock('Lamp', -8);
updateStock('Bookshelf', 21);

// Task 4
// Create a Function to Check Low Stock Products
function checkLowStock(inventory){
    inventory.forEach(product => {
        if(product.quantity < product.lowStockLevel){ // If statement for logging products whose quantity is less than lowStockLevel
            console.log(product.name);
        }
    }
    );
}
console.log("List of Products That Need Restocking");
checkLowStock(inventory);

//Task 5
//Create a Function to Calculate Total Inventory Value
function calculateInventoryValue(inventory){
    let totalValue = 0;
    for (const item of inventory){
        totalValue += item.quantity * item.price; // Multiplies quantity by price for each product  
    }
    return totalValue; // Returns multiplication result
}
const totalValue =calculateInventoryValue(inventory);
console.log(`Total Inventory Value: $${totalValue}`);

//Task 6 
//Create a Function to Process a Sale
function processSale(name){
    let product = inventory.find(inventory=>inventory.name === name);
    return inventory ? inventory.find:'Product Unavailable';
        if (product.quantity >= unitsSold) {
            // Update the stock
            updateStock(product, unitsSold);
        } else {
            console.log(`Not enough stock for ${productName}.`);
        }
    } 

console.log(processSale('Chair', -25));
console.log(processSale('Lamp', 37));
console.log(processSale('Sofa', 11));
console.log(processSale('Clock', 22));
console.log(processSale('Computer', 25));