//Michelle Munksgard
//11/18/2014
//Functions_Wacky

//Determine days until Christmas

//Givens
var month = prompt("What month is it? Enter using a number. Ex. November is 11.");
var currentDate = prompt("What is today's date? Do not include month");
var daysInNov = 30;
var daysInDec = 25; // days until Chrismas in December

function xmas(m, c){
    if(m === 11){
        monthsLeft = 12 - m;
        daysLeft = daysInNov - c + daysInDec;

        alert("There is " + monthsLeft + " month and " + daysLeft + " days until Christmas 2014.");

    }else if (m === 12){
        daysLeft = daysInDec - c;

        alert("There is " + daysLeft + " days until Christmas 2014.");

    }else{
        alert("Christmas is over for 2014, please check back later.");
    }
}

xmas(month, currentDate);