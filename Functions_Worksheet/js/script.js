//Michelle Munksgard
//11/16/2014
//Functions - Worksheet

//Stung

//Givens

//declare variable kill to determine how many bee stings it'll take to kill the animal
//call beeStings with the given variables, stings per pound and weight of animal
var kill = beeStings(8.66666667,150);

//create the function with the parameters to be used, stings * weight
function beeStings(stings, weight){
    return stings * weight;
}

//create a variable to hold the results
result = "It takes " + kill + " stings to kill this animal.";

//print the results to the console
console.log(result);

