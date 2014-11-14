//Michelle Munksgard
//11/13/2014
//Conditionals_Wacky

//Determine if I can build a snowman

//declare variable snow and prompt user to tell if there is snow on the ground
var snow = prompt("Is there snow on the ground?");

//if the answer is yes, you might be able to build a snowman, if not you will not be able to build a snowman
result = (snow === "yes") ? "You might be able to build a snowman." : "You will not be able to build a snowman.";

//print to console and alert the user
console.log(result);
alert(result);

//declare snow type to determine if the snow is good enough for a snowman
var snowType = ["crunchie", "soft", "hard", "packable"];

//if the snow is crunchie or packable then you can make a snowman, otherwise you should try sled riding
if(snowType[0] === "crunchie" || snowType[1] === "packable"){
    console.log("You can make a snowman.");
}else{
    console.log("You should try sled riding.");
}

//print to console the result of the snow type
console.log(snowType);

