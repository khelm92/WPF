// Kasey Helm 10/10/2013 Expressions Worksheet

//Dog Years

var sparkyAge = 6; //sparky is 6 years old in human years
var sparkyAgeDogYears = sparkyAge * 7; //to change to dog years, you multiply by 7
console.log("Sparky is" + " " + sparkyAge + " " + "years old, which is" + " " + sparkyAgeDogYears + " " +"in dog years") //Sparky is 6 years old, which is 42 in dog years

//Slice of Pie 1

var numOfSlices = 10; //there are 10 slices per pizza
var numOfPeople = 35; //there are 35 people at the party
var numOfPizzas = 12; //there are 12 pizzas
var slicesPerPerson = numOfSlices * numOfPizzas / numOfPeople; //multiply # of slices by # of pizzas, and divide by # of people
console.log("Each person ate" + " " + slicesPerPerson + " " + "slices of pizza at the party"); // each person ate 3.42 slices of pizza at the party

//Slice of Pie 2

var numOfSlices = 10; //there are 10 slices per pizza
var numOfPeople = 35; //there are 35 people at the party
var numOfPizzas = 12; //there are 12 pizzas
var slicesPerPerson = numOfSlices * numOfPizzas / numOfPeople; //multiply # of slices by # of pizzas, and divide by # of people
var totalSlices = numOfSlices * numOfPizzas; //find the total # of slices
var slicesForSparky = totalSlices % numOfPeople; //finding the remainder of slices if eeach person eats a whole number of 3
console.log("Sparky got" + " " + slicesForSparky + " " + "slices of pizza"); // Sparky got 15 slices of pizza

//Average Shopping Bill

var weeklyGroceryBills = [100, 180, 200, 75, 155]; //array of grocery bills for 5 weeks
var totalAmount = weeklyGroceryBills[0] + weeklyGroceryBills[1] + weeklyGroceryBills[2] + weeklyGroceryBills[3] + weeklyGroceryBills[4]; //adding array for total amount of bills
var avgAmount = totalAmount / 5; //finding average by taking total amount divided by 5 weeks
console.log("You have spent a total of" + " " + totalAmount + " " + "on groceries over 5 weeks." + " " + "That is an average of" + " " + avgAmount + " " + "per week");

//Discounts

var origPrice = 20; //original price of shirt is $20
var discount = 25; //discount of 25%
var description = "blue shirt"; //item is a blue shirt
var salesTax = 8; //8% sales tax
var priceWithoutTax = origPrice - ((discount / 100) * origPrice); //find the amount of the 25% discount and then subtract that from the total original price
var priceWithTax = priceWithoutTax + ((salesTax / 100) * priceWithoutTax);
console.log("Your" + " " + description + " " + "was originally" + " " + origPrice + " " + "but after a" + " " + discount + "%" + " " + "discount, it is now" + " " + priceWithoutTax + " " + "without tax, and" + " " + priceWithTax + " " + "with tax.");