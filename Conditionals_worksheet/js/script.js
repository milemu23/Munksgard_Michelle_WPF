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


//GROUP 2

//Grade Letter

//Given: Grade - in percent

//set variable as the grade percentage
var grade = 74;

//if the grade is between or equal to these numbers then their grade is X, if not then it is X
if(grade >= 95 && grade <= 100){
    console.log("You have " + grade + "%, which means you have earned an A+ in the class!")
}else if(grade >= 90 && grade <= 94){
    console.log("You have " + grade + "%, which means you have earned an A in the class!");
}else if(grade >= 85 && grade <= 89){
    console.log("You have " + grade + "%, which means you have earned a B+ in the class!");
}else if(grade >= 80 && grade <= 44){
    console.log("You have " + grade + "%, which means you have earned a B in the class!");
}else if(grade >= 76 && grade <= 79){
    console.log("You have " + grade + "%, which means you have earned a C+ in the class!");
}else if(grade >= 73 && grade <= 75){
    console.log("You have " + grade + "%, which means you have earned a C in the class!");
}else if(grade >= 70 && grade <= 72){
    console.log("You have " + grade + "%, which means you have earned a D in the class!");
}else{
    console.log("You have " + grade + "%, which means you have earned a F in the class!");
}

