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

//print the results to the console
console.log("It takes " + kill + " stings to kill this animal.");

