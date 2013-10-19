// Kasey Helm 10/18/2013 Conditionals Assignment - Industry

//in my expressions assignment, I saw how much someone would save with a good driver discount on their auto insurance policy, this time I'm going to see if they are even eligible to get the discount


var drivingYears = prompt("How many years have you had your driver's license\n*Numerical Values Only, no letters*"); //check how many years the user has had a drivers license
if(drivingYears >= 3){var tickets = prompt("Do you have any tickets or accidents on your record?"); //if more than or equal to 3 years, continue to this question
}else{alert("Sorry, you're not eligible for the good driver discount"); // if less than 3 years, denied
}

var results;
results = (tickets == "no") ? alert("Congratulations, you are eligible for the \ngood driver discount!") : alert("Sorry, you're not eligible for the good driver discount"); //if they have no tickets or accidents, they can get the discount. if they do, they are not eligible
results = (tickets == "no") ? console.log("Congratulations, you are eligible for the \ngood driver discount!") : console.log("Sorry, you're not eligible for the good driver discount"); //same as above only printed in console





