//Create an Inventory Array of Product Objects
const inventory = [
    { name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },   
    { name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },  
    { name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 }, 
    { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },  
    { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }    
];

//Create a Function to Display Product Details
function displayProductDetails() {
    for (let i = 0; i < inventory.length; i++){
        const {name, price, quantity, lowStockLevel} = inventory[i];
        const stockStatus = quantity <= lowStockLevel ? "Low Stock" : "In Stock";
        // Logs details of each product
        console.log('Product Name: ${name}');
        console.log('Price: ${price}');
        console.log('Quantity: ${quantity}');
        console.log('Stock Status: ${stockStatus}');
        console.log('----- Product Details Displayed Above -----');
    }
}
displayProductDetails(); //Runs the function

//Create a Function to Calculate Total Inventory Value
function calculateInventoryValue(inventory){
    let totalValue = 0;
    for (const item of inventory){
        totalValue += item.quantity * item.price;
    }
    return totalValue;
}
const totalValue =calculateInventoryValue(inventory);
console.log('Total Inventory: $${totalValue}');