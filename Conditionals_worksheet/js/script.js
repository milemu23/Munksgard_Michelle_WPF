//Michelle Munksgard
//11/13/2014
//Conditionals Worksheet

//GROUP 1

//Celsius to Fahrenheit Converter
//Convert temperature

//Givens: Degrees, Units

var F = "F"; //create variable that defines F as F
var C = "C"; //create variable that defines C as C

//prompt the user for the degrees
degrees = prompt("What is the number of degrees you want to convert?");

//validate the users response to make sure they don't leave it blank
if(degrees === ""){
    degrees = prompt("Please enter a number of degrees. Do not leave it blank.");
}

//prompt the user for the units
unit = prompt("What is the unit of the temperature? Enter F or C.");

//validate the users response to make sure they don't leave it blank
if(unit === ""){
    unit = prompt("Please enter a number of degrees. Do not leave it blank.");
}

//if the response is F for fahrenheit convert to Celsius or else converter to fahrenheit. Print the results and alert the user.
if(unit === "F"){
    C = (degrees - 32) * 5 / 9;
    console.log("The temperature is " + C + " degrees Celsius.");
    alert("The temperature is " + C + " degrees Celsius.");

}else{
    F = degrees * 9 / 5 + 32;
    console.log("The temperature is " + F + " degrees Fahrenheit.");
    alert("The temperature is " + F + " degrees Fahrenheit.");
}

