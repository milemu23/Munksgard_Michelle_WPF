//Michelle Munksgard
//11/13/2014
//Conditionals_Personal

//What drink can I afford?
//Vodka would be the top choice but if there is not enough money then a beer and if there is not enough for that then water.

//declare the variables for beer and vodka setting the price of each
var beer = 3.50;
var vodka = 4.50;

//prompt the user to see how much money they have to spend
var money = prompt("How much money do you have to spend?");
var quantity = prompt("How many drinks do you want to have?");

var totalBeer = beer * quantity;
var totalVodka = vodka * quantity;

if(totalVodka <= money) {
    console.log("You have enough money to get a vodka!");
    alert("You have enough money to get a vodka!");
}else if(totalBeer <= money){
    console.log("You have enough money to get a beer!");
    alert("You have enough money to get a beer!");
}else{
    console.log("You have to get water!");
    alert("You have to get water!");
}