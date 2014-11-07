//Michelle Munksgard
//11/06/2014
//Expressions Worksheet

//Dog Years
//Determine Sparky's age in dog years
var humanYears = 3;
var dogYears = humanYears * 7;


console.log("Sparky is " + humanYears + " years old which is " + dogYears + " in dog years." );


//Slice of Pie Part 1
//Determine slices of pie per person

var slicesPerPizza = 8;
var noOfPeople = 20;
var noOfPizzas = 5;
var slicesPerPerson;

slicesPerPerson = (noOfPizzas * slicesPerPizza) / noOfPeople;

console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");


//Slice of Pie Part 2
//Determine number of pieces Sparky gets

var totalSlices = slicesPerPizza * noOfPizzas;
var sparkyPizza = totalSlices - (slicesPerPerson * noOfPeople);

console.log(totalSlices);
console.log("Sparky got " + sparkyPizza + " slices of pizza.");


//Average shopping bill
//Find total amount spend on groceries and average weekly grocery spending

var eachWeek = [54, 44, 83, 47, 38];
var total = (eachWeek[0] + eachWeek[1] + eachWeek[2] + eachWeek[3] + eachWeek[4]);
var average = total/5;

console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + average + " per week" );


//Discounts
//Calculate the price with or without tax

var price = 15.99;
var discount = 30;
var description = "dog treats"
var salesTax = 6;

var withoutTax = price - (price * (discount/100));
var withTax = withoutTax + (withoutTax * (salesTax/100));

console.log("Your " + description + " were originally $" + price + ", after a " + discount + "%, it is now $" + withoutTax + " without tax, and $" + withTax + " with tax." );