// Kasey Helm 10/10/2013 Expressions - Wacky

// How many balloons will a clown have to bring to a birthday party to make balloon animals for the kids

var balloonsPerAnimal = prompt("How many balloons do you usually \nuse per balloon animal?");
var numOfKids = prompt("How many kids will be at the party?");
var animalsPerKid = prompt("Up to how many balloons animals \nwill you make for each kid?");
var numOfAnimals = animalsPerKid * numOfKids;
var totalBalloons = balloonsPerAnimal * numOfAnimals;
var result = alert("You will need to bring " + totalBalloons + " balloons to the birthday party. Have fun!" );
console.log("You will need to bring " + totalBalloons + " balloons to the birthday party. Have fun!");