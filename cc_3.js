// Task 1 Product Price Management Scenario 

let prices = [5,6,7,8,9];  //Define an array of prices 
prices.push(10); // Added the price 10 to the end of the array
prices.shift(5); // Removed first value of prices list 
console.log(prices) // Output [6,7,8,9,10]

//Task 2 Modifiying Customer Orders Scenario 

let orders = [10,11,12,13,14]; //Define an array of order quantities
orders[2] = 17; // Adding 5 to the third order amount
let total = orders.reduce((sum,orders) => sum + orders); //Adding the amount of orders together
console.log("Updated Orders",orders)// Logginng updated order numbers
console.log("Total Orders",total); //Output: 65
