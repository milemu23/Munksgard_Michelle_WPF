//Michelle Munksgard
//11/13/2014
//Conditionals_Industry

var monthlyBills = 1500.00;
var wage = 35.00;
var monthlyIncome = hours * wage;
var hours = prompt("How many hours did you work this month?");

if(hours === ""){
    prompt("Please enter the amount of hours you worked this month. Do not leave blank.");
}

var addExpense = prompt("Amount of additional expenses. If none, enter zero.");

if(addExpense === ""){
    prompt("Please enter any additional expenses. Do not leave blank. If none, enter zero.");
}