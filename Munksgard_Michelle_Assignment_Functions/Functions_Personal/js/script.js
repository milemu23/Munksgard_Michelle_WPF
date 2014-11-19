//Michelle Munksgard
//11/18/2014
//Functions_Personal

//Weight Goal
//Determine how many days it will take to lose weight to meet the goal
//Assume the average weight loss a week is 2 lbs

//Givens
var currentWeight = prompt("What is your current weight?");
var goalWeight = prompt("What is your goal weight?");
var totalWeeksLeft = (currentWeight - goalWeight) / 2;

function result(c, g){
    if(c - g <= 0){
        alert("Congratulations you met your goal!");
    }else{
        alert("You have about " + totalWeeksLeft + " weeks left to reach your goal. Keep going!" );
    }

}

result(currentWeight, goalWeight);