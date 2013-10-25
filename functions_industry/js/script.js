//Kasey Helm 10/24/2013 Functions - Industry

//how long would a tank of gas last you only driving to and from work?

var mpg = prompt("How many miles per gallon does your car get?"); //find out the users mpg
var distance = prompt("How far do you commute to work round trip per day?"); //find the distance the user drives to and from work per day
var gallons = prompt("How many gallons of gas does your car hold?"); //find how many gallons the gas tank holds
var results = calcResults(mpg, distance, gallons); //call the function calculating the results
alert("A tank of gas will last you " + results + " work days"); //alert with the results
console.log("A tank of gas will last you " + results + " work days"); //print results to console

function calcResults(mpg, d, g){ return g * mpg / d; //function calculating the results by multiplying the gallons and mpg and divide by the distance per day
}