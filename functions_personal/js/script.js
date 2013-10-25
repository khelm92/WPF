//Kasey Helm 10/24/2013 Functions - Personal

//calculating how long it would take you to run a certain distance based on your speed of minutes per mile

var distance = prompt("How far do you want to run in miles?");//finding out how far the user would like to run
var speed = prompt("How many minutes does it take you to run one mile?");//finding out how fast the user runs
var time = calcTime(distance, speed);//calling the function that runs the calculation
alert("It will take you " + time + " minutes to run " + distance + " miles");//alerts the user of their results
console.log("It will take you " + time + " minutes to run " + distance + " miles");//prints results in console

function calcTime(d, s){ return d * s; //the function calculating the distance times the speed to provide the results
}