//Functions - Procedures vs Functions

//both are functions
//functions return values, procedures don't


//this is a function
function calcAreaF(width, height){
    var area = width * height;
    return area;
}

//This is a procedure
function calcAreaP(width, height){
    var area = width * height;
    console.log(area); //no return
}