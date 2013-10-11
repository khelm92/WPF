// Kasey Helm 10/10/2013 Expressions - Industry

// I work for an insurance agency, so we are going to find out how much someone will save on their auto insurance premium with a 10% good driver discount

var discount = 10; //10% good driver discount
var currentPremium = prompt("How much is your current auto insurance premium?"); //the premium they are currently paying
var discountAmount = (discount / 100) * currentPremium; //find out the amount of money the 10% discount will save
var priceAfterDiscount = currentPremium - discountAmount; //find out their new premium after the 10% discount
var result = alert("You will save $" + discountAmount + " on your premium with a good driver discount. Your new premium is $" + priceAfterDiscount + "."); //finally, the results of the discount!
console.log("You will save $" + discountAmount + " on your premium with a good driver discount. Your new premium is $" + priceAfterDiscount + "."); //same as above, only shown in console