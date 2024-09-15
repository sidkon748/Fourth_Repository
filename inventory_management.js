//Create an Inventory Array of Product Objects
const inventory = [
    { name: 'Watch', price: 110, quantity: 100, lowStockLevel: 25 },   
    { name: 'Television', price: 420, quantity: 53, lowStockLevel: 21 },  
    { name: 'Chair', price: 50, quantity: 79, lowStockLevel: 17 }, 
    { name: 'Table', price: 90, quantity: 56, lowStockLevel: 53 },  
    { name: 'Bookshelf', price: 150, quantity: 38, lowStockLevel: 10 }    
];

//Create a Function to Display Product Details
function displayProductDetails() {
    for (let i = 0; i < inventory.length; i++){
        const {name, price, quantity, lowStockLevel} = inventory[i];
        const stockStatus = quantity <= lowStockLevel ? "Low Stock" : "In Stock";
        // Logs details of each product
        console.log(`Product Name: ${name}`);
        console.log(`Price: ${price}`);
        console.log(`Stock Status: ${stockStatus}`);
        console.log(`Quantity: ${quantity}`);
        console.log(`----- Product Details Displayed Above -----`);
    }
}
displayProductDetails(); //Runs the function

// Create a Function to Update Stock
function updateStock(productName, unitsSold) {
    let productPresent = false;

    for (const item of inventory) {
        if (item.name === productName) {
            item.quantity -= unitsSold; // Update the quantity
            productPresent = true;

            // Determine stock status based on updated quantity
            let stockStatus;
            if (item.quantity < 1) {
                stockStatus = "Out of Stock";
            } else if (item.quantity < item.lowStockLevel) {
                stockStatus = "Low Stock";
            } else {
                stocktatus = "In Stock";
            }

            // Log tShe updated stock details
            console.log(`Product Name: ${item.name}`);
            console.log(`Updated Stock Status: ${stockStatus}`);
            console.log(`Updated Quantity: ${item.quantity}`);;
    return;
}
}
console.log(`${productName} not available`);

}
updateStock('Table', 8);
updateStock('Watch', -80);
updateStock('Bookshelf', 10);

//Create a Function to Calculate Total Inventory Value
function calculateInventoryValue(inventory){
    let totalValue = 0;
    for (const item of inventory){
        totalValue += item.quantity * item.price;
    }
    return totalValue;
}
const totalValue =calculateInventoryValue(inventory);
console.log(`Total Inventory: $${totalValue}`);