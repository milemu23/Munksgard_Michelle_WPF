//Michelle Munksgard
//November 6, 2014
//Assignment: Expressions
//Wacky

//I want to make snowman from milk jugs as Christmas decorations.
//If I save X milk jugs a week, I can make X snowman before Christmas, which is in X days.


var milkJugsWeek = prompt("How many milk jugs can you save a week?"); //User enters the amount of milk jugs they can save in a week
var daysTilXmas = prompt("How many days are there until Christmas?"); //User enters how many days are left until Christmas

var daysOfWeek = 0;
daysOfWeek += 7;
var daysToWeeks = daysTilXmas/daysOfWeek; // Calculate how many weeks by dividing days by 7
var snowman = milkJugsWeek * daysToWeeks; // The amount of snowman that can be made from milk jugs equals the number of milk jugs a week multiplied by the number of weeks remaining until Christmas.

var result = "The number of snowman you can make for Christmas is " + snowman + ".";
alert(result);