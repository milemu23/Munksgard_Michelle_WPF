//Michelle Munksgard
//November 6, 2014
//Assignment: Expressions
//Wacky

//If I save X milk jugs a week, I can make X snowman before Christmas, which is in X days.


var milkJugsWeek = prompt("How many milk jugs do you save a week?");
var daysTilXmas = prompt("How many days are there until Christmas?");

var daysToWeeks = daysTilXmas/7;
var snowman = milkJugsWeek * daysToWeeks;

var result = "The number of snowman you can make for Christmas is " + snowman + ".";
alert(result);