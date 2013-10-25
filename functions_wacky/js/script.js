//Kasey Helm 10/24/2013 Functions - Wacky

//if I wanted to gain a bunch of weight by eating only cereal, how much would I have to eat?

var calories = prompt("How many calories are in one bowl of your cereal?"); //find the amount of calories in one bowl of cereal
var pounds = prompt("How many pounds do you want to gain?"); //find how many pounds the user wants to gain by only eating cereal
var calsPerPound = 3500; //there are 3500 calories in one pound of body weight
var totalCals = calsPerPound * pounds; //calculate the total number of calories the user needs
var results = calcResults(totalCals, calories);  //call the function
alert("You will need to eat " + results + " bowls of cereal to gain " + pounds + " pounds of weight"); //alert with the results
console.log("You will need to eat " + results + " bowls of cereal to gain " + pounds + " pounds of weight"); //print results in console

function calcResults(totalCals, calories){ return totalCals / calories; //function calculating results by dividing the total number of calories by the calories in each bowl
}