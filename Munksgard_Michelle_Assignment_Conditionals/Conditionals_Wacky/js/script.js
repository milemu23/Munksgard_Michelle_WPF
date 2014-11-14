//Michelle Munksgard
//11/13/2014
//Conditionals_Wacky

var snow = prompt("Is there snow on the ground?");

result = (snow === "yes") ? "You might be able to build a snowman." : "You will not be able to build a snowman.";

console.log(result);
alert(result);


var snowType = ["crunchie", "soft", "hard", "packable"];

if(snowType[0] === "crunchie" || snowType[1] === "packable"){
    console.log("You can make a snowman.");
}else{
    console.log("You should try sled riding.");
}

console.log(snowType);

