//Create an Inventory Array of Product Objects
const inventory = [
    { name: 'Watch', price: 110, quantity: 100, lowStockLevel: 25 },   
    { name: 'Television', price: 420, quantity: 53, lowStockLevel: 21 },  
    { name: 'Chair', price: 50, quantity: 79, lowStockLevel: 17 }, 
    { name: 'Table', price: 90, quantity: 56, lowStockLevel: 53 },  
    { name: 'Bookshelf', price: 150, quantity: 38, lowStockLevel: 10 },
    { name: 'Sofa', price: 120, quantity: 95, lowStockLevel: 37 },   
    { name: 'Clock', price: 70, quantity: 37, lowStockLevel: 18 },  
    { name: 'Desk', price: 40, quantity: 45, lowStockLevel: 25 }, 
    { name: 'Computer', price: 50, quantity: 56, lowStockLevel: 7 },  
    { name: 'Lamp', price: 70, quantity: 38, lowStockLevel: 11 }     
];

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
updateStock('Clock', 18);
updateStock('Watch', -37);
updateStock('Television', 3);
updateStock('Lamp', -8);
updateStock('Bookshelf', 21);

// Create a Function to Check Low Stock Products
function checkLowStock(inventory){
    inventory.forEach(product => {
        if(product.quantity < product.lowStockLevel){
            console.log(product.name);
        }
    }
    );
}
console.log("List of Products That Need Restocking");
checkLowStock(inventory);

//Create a Function to Calculate Total Inventory Value
function calculateInventoryValue(inventory){
    let totalValue = 0;
    for (const item of inventory){
        totalValue += item.quantity * item.price; // multiplies quantity by price for each product  
    }
    return totalValue;
}
const totalValue =calculateInventoryValue(inventory);
console.log(`Total Inventory Value: $${totalValue}`);