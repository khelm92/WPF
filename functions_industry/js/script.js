//Kasey Helm 10/24/2013 Functions - Industry

//how long would a tank of gas last you only driving to and from work?

var mpg = prompt("How many miles per gallon does your car get?");
var distance = prompt("How far do you commute to work round trip per day?");
var gallons = prompt("How many gallons of gas does your car hold?");
var results = calcResults(mpg, distance, gallons);
alert("A tank of gas will last you " + results + " work days");
console.log("A tank of gas will last you " + results + " work days");

function calcResults(mpg, d, g){ return g * mpg / d;
}