// Kasey Helm 10/17/2013 Conditionals Assignment - Personal





//What type of protein can I afford on my budget? no protein powder available = just buy milk, medium budget = whey concentrate, high budget = whey isolate



var storeAvailable = prompt("Do you have a store that sells protein powder near you?"); //seeing if there is a place available to buy protein for the user
if(storeAvailable == "yes"){var budget = prompt("How much money do you have to spend? \n*Use Numbers Only, no symbols or letters*"); //if there is a store available, check how much money they have to spend
}else if(storeAvailable == "no"){alert("Just buy milk at the grocery store"); //if there is no protein store available, then the best bet for the user is to just buy milk
}else{prompt("Do you have a store that sells protein powder near you?\n*You must answer this question*"); //if an answer other than yes or no is given, or the user does not enter anything, repeats first question
}

var results; //creating a variable for the results
results = (budget >= 50) ? alert("Buy whey isolate protein!") : alert("Buy whey concentrate protein!"); //giving an alert for the results
results = (budget >= 50) ? console.log("Buy whey isolate protein!") : console.log("Buy whey concentrate protein!"); //print results in console




