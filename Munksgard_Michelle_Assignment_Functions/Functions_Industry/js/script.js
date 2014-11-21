//Michelle Munksgard
//11/18/2014
//Functions_Industry


//Determine frame size


//Givens

//set variable to imgHeight and prompt user
var imgHeight = prompt("What is the height of your image? Enter in inches.");

//validate and make sure response a number
while(isNaN(imgHeight) || imgHeight===""){
    imgHeight = prompt("What is the height of your image? Enter in inches.");
}

//set variable to imgWidth and prompt user
var imgWidth = prompt("What is the width of your image? Enter in inches.");

//validate and make sure response is a number
while(isNaN(imgWidth) || imgWidth===""){
    imgWidth =prompt("What is the width of your image? Enter in inches.");
}

//sets variable to evenSides and prompts user
var evenSides = prompt("Do you want all four sides to be the same?");

//validates that the user enters an answer
while(evenSides===""){
    evenSides = prompt("Do you want all four sides to be the same?");
}

//anonymous function -- if the user wants even sides, prompt for mat side size, otherwise ask for each side size
var frames = function(h, w) {
    if (evenSides === "yes") {
        var sides = prompt("What size do you want your mat sides? Enter in inches.");
        var frameSizeHeight = Number(h) + Number(sides * 2);
         var frameSizeWidth = Number(w) + Number(sides * 2);
        alert("The inside dimensions for your frame are " + frameSizeHeight + " x " + frameSizeWidth + ".");
    } else {
        var matSizeTop = prompt("What size do you want at the top for your mat? Enter in inches.");
        var matSizeBottom = prompt("What size do you want at the bottom for your mat? Enter in inches");
        var matSizeSides = prompt("What size do you want at the sides for your mat? Enter in inches");

        frameSizeHeight = Number(h) + Number(matSizeTop) + Number(matSizeBottom);
        frameSizeWidth = Number(w) + Number(matSizeSides * 2);

        alert("The inside dimensions for your frame are " + frameSizeHeight + " x " + frameSizeWidth + ".");
    }
};

//call the function
frames(imgHeight, imgWidth);
