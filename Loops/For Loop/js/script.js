//While Loops

var b = 50; //setups the index

while(b > 0){ //checks the condition
    console.log(b + " kegs on the wall.");
    b--; //increments or decrements the index
}

//Do While Loops

var c = 10;

//run this code (do) while the condition is false
do{
    console.log(c + " kegs on the wall.");
    c--;
}while (c > 0);


//For Loops
//shorthand version of loops

for(var i = 10; i > 0; i--){
    console.log(i + " kegs on the wall.");
}