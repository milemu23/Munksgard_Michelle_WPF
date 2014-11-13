//Michelle Munksgard
//11/13/2014
//Conditionals_Industry

//declare variables for monthly bills and wages, defining the known amount - givens
var monthlyBills = 1500.00;
var wage = 35.00;

//prompt the user for the amount of hours that they made this month
var hours = prompt("How many hours did you work this month?");

//validate the users hours
if(hours === ""){
    prompt("Please enter the amount of hours you worked this month. Do not leave blank.");
}

var addExpense = prompt("Amount of additional expenses. If none, enter zero.");

var monthlyIncome = hours * wage;

if(addExpense === ""){
    prompt("Please enter any additional expenses. Do not leave blank. If none, enter zero.");
}

result = (monthlyIncome >= monthlyBills + addExpense) ? "You have enough money for the month!" : "You need to make more money this month!";
alert(result);