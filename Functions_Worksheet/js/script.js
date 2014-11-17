//Functions - Worksheet

//Stung

//Givens
var stings = 8.6666666667;
var weight = 150;
kill = beeStings(stings,weight);
console.log("It takes " + kill + "stings to kill this animal.");

function beeStings(stings, weight){
    return stings * weight;
}

beeStings(8.6667, 150);