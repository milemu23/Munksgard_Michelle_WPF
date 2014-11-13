//Michelle Munksgard
//11/13/2014
//Conditionals_Industry

//declare variables for monthly bills and wages, defining the known amount - givens

//Givens
var monthlyBills = 1500.00;
var wage = 35.00;

//prompt the user for the amount of hours that they made this month
var hours = prompt("How many hours did you work this month?");

//validate the users hours to make sure they don't leave them blank
if(hours === ""){
    prompt("Please enter the amount of hours you worked this month. Do not leave blank.");
}

//prompt the user for any additional expense they may have had
var addExpense = prompt("Amount of additional expenses. If none, enter zero.");

//validate the amount of additional expenses
if(addExpense === ""){
    prompt("Please enter any additional expenses. Do not leave blank. If none, enter zero.");
}

//calculate monthlyIncome by multiplying hours and wage
var monthlyIncome = hours * wage;

//if your monthly income is greater than or equal to the amount of monthly bills + added expenses then you have enough for the month, if not then you need to make more money.
result = (monthlyIncome >= monthlyBills + addExpense) ? "You have enough money for the month!" : "You need to make more money this month!";

//Print result to the console and alert the user
console.log(result);
alert(result);