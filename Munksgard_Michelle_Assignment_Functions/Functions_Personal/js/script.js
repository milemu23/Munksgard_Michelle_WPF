//Michelle Munksgard
//11/18/2014
//Functions_Personal

//Weight Goal
//Determine how many days it will take to lose weight to meet the goal
//Assume the average weight loss a week is 2 lbs

//Givens
//prompt to find out the users current weight
var currentWeight = prompt("What is your current weight?");

//validate the users current weight
if(currentWeight === ""){
    prompt("Please enter your current weight. Do not leave blank.");
}

//prompt to find out the users goal weight
var goalWeight = prompt("What is your goal weight?");

//validate the users goal weight
if(quantity === ""){
    prompt("Please enter your goal weight. Do not leave blank.");
}

//average lbs per week a person can lose in a healthy way
var lbsPerWeek = 2;
//total weeks left to reach goal
var totalWeeksLeft = (currentWeight - goalWeight) / lbsPerWeek;

//declare function result with parameters current weight, goal weight and lbs per week, if current weight - goal weight divided by lbsPerWeek is less than or equal to 0, then the user has reached their goal weight, otherwise the user had this amount of time left if they loss the average 2 lbs per week
function result(c, g, l){
    if((c - g) / l <= 0){
        //alert the user if they met their goal
        alert("Congratulations you met your goal!");
    }else{
        //alert the user telling them how many weeks they have left
        alert("You have about " + totalWeeksLeft + " weeks left to reach your goal. Keep going!" );
    }

}

//call the function
result(currentWeight, goalWeight, lbsPerWeek);