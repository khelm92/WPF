// Kasey Helm 10/10/2013 Expressions - Personal

// How much money will I have to spend on whey protein powder in a year?

var proteinPrice = prompt("Please enter the price you spend on \none container of protein powder"); //find the total price of each container of protein
var proteinServings = prompt("Please enter the amount of servings \nin one container of protein powder"); //find how many servings are in each container
var pricePerServing = proteinPrice / proteinServings; //find how much each serving of protein costs
var dailyServings = prompt("How many servings of \nprotein powder do you take per day?"); //find how many servings per day
var daysPerWeek = prompt("How many days per week \ndo you take protein powder?"); //find how many days per week
var annualCost = (pricePerServing * dailyServings) * (daysPerWeek * 52); //multiply price per serving by the servings taken daily to find daily cost, then multiply the days taken per week by 52 weeks in a year to find how many days per year they are taking it, then multiply days per year by daily cost
var result = alert("You will have to spend $" + annualCost + " per year on whey protein powder"); //and finally this shows the amount you will spend annually!
console.log("You will have to spend $" + annualCost + " per year on whey protein powder"); //same as above only shown in console
