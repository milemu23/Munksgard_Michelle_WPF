//Michelle Munksgard
//11/18/2014
//Functions_Wacky

//Determine days until Christmas

//Givens

//set variable for month and prompt user
var month = prompt("What month is it? Enter using a number. Ex. November is 11.");

//validate and loop until number is entered
while(isNaN(month) || month===""){
    month = prompt("What month is it? Enter using a number. Ex. November is 11.");
}

//set varaible for the current date and prompt user
var currentDate = prompt("What is today's date? Do not include month");

//validate prompt and make sure it's a number
while(isNaN(currentDate) || currentDate===""){
    currentDate = prompt("What is today's date? Do not include month");
}


var daysInNov = 30; // days in November
var daysInDec = 25; // days until Christmas in December
var daysLeft; //calculates the days that are left until Christmas

//call the function
xmas(month, currentDate);

//create the function
//if m = 11, then you subtract the days in november by the date and add the days in December, other wise if the month is 12, then you subtract the days in December until Christmas by the date
//If the number is not 11 or 12, then Christmas is over for the year
function xmas(m, d){
    if(m === "11"){
        daysLeft = daysInNov - d + daysInDec;

        alert("There are " + daysLeft + " days until Christmas 2014.");
        console.log("There are " + daysLeft + " days until Christmas 2014.");

    }else if (m === "12"){
        daysLeft = daysInDec - d;


        alert("There is " + daysLeft + " days until Christmas 2014.");
        console.log("There is " + daysLeft + " days until Christmas 2014.");

    }else{
        alert("Christmas is over for 2014, please check back later.");
        console.log("Christmas is over for 2014, please check back later.")
    }
}

