//Michelle Munksgard
//11/13/2014
//Conditionals_Personal

//What drink can I afford?
//Vodka would be the top choice but if there is not enough money then a beer and if there is not enough for that then water.

//declare the variables for beer and vodka setting the price of each
var beer = 3.50;
var vodka = 4.50;

//prompt the user to see how much money they have to spend
var money = prompt("How much money do you have to spend for drinks?");
//prompt the user for the amount of drinks that they would like to have
var quantity = prompt("How many drinks do you want to have?");

//create a variable that calculates the price of drink by the amount the user desires to have
var totalBeer = beer * quantity;
var totalVodka = vodka * quantity;

//if there is more money than the price of vodka user can get vodka, if not see if there is more money than the price of beer, otherwise the user gets water
//Alert the user to what they are able to get
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