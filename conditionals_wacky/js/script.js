// Kasey Helm 10/18/2013 Conditionals - Wacky

//what type of litter should I buy for my cats

var numOfCats = prompt("How many cats do you have? \n*Numerical Values Only*");
if(numOfCats > 1){alert("Get multi-cat litter");
}else if(numOfCats == 1){var stinkyCat = prompt("Does your litter box stink?");
}

var results;
results = (stinkyCat == "yes") ? alert("Get anti-odor litter") : alert("Get the cheapest clumping litter available");
results = (stinkyCat == "yes") ? console.log("Get anti-odor litter") : console.log("Get the cheapest clumping litter available");





