// Task 1 Product Price Management Scenario 

let prices = [5,6,7,8,9];  //Define an array of prices 
prices.push(10); // Added the price 10 to the end of the array
prices.shift(5); // Removed first value of prices list 
console.log(prices) // Output [6,7,8,9,10]

//Task 2 Modifiying Customer Orders Scenario 

let orders = [10,11,12,13,14]; //Define an array of order quantities
orders[2] = 17; // Adding 5 to the third order amount
let total = orders.reduce((sum,orders) => sum + orders); //Adding the amount of orders together
console.log("Updated Orders",orders); // Logginng updated order numbers
console.log("Total Orders",total); //Output: 65

// Task 3 Employee Performance Tracking Scenario

let employee = {
name: "John Pork",
role: "Supervisor",
performanceScore: 67,
isActive: true

} // Declaring an employee object
employee.performanceScore = 72; // Updating the performance score
employee.promotionEligible = false; // Adding new property
console.log("Updated Employee Performance Data", employee); //Logging updated employee info

//Task 4 Customer Feedback Records Scenario 
let feedback = [
    {customerName:"Jim", feedbackText:"Not good enough", rating: "1 star"},
    {customerName:"Jack", feedbackText: "Really good!", rating: "5 stars"},
    {CustomerName:"Jessica", feedbackText: "Ok.", rating:"3 stars"}
]; // Creating array of customer feedback
feedback.push({customerName: "Janet", feedbackText: "Horrible", rating: "0 stars"}); // Adding New Customer Feedback
console.log("Customer Feedback", feedback) // 
