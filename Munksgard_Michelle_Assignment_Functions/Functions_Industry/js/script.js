//Michelle Munksgard
//11/18/2014
//Functions_Industry


//Determine frame size


//Givens
var imgHeight = prompt("What is the height of your image? Enter in inches");
var imgWidth = prompt("What is the width of your image? Enter in inches.");


    if(true) {
        var evenSides = prompt("What size do you want your mat sides? Enter in inches.");
        frameSizeHeight = imgHeight + evenSides * 2;
        frameSizeWidth = imgWidth + evenSides * 2;
        alert("The inside dimensions for your frame are " + frameSizeHeight + " x " + frameSizeWidth + "." );
    }else {
        var matSizeTop = prompt("What size do you want at the top for your mat? Enter in inches.");
        var matSizeBottom = prompt("What size do you want at the bottom for your mat? Enter in inches");
        var matSizeSides = prompt("What size do you want at the sides for your mat? Enter in inches");

        frameSizeHeight = imgHeight + matSizeTop + matSizeBottom;
        frameSizeWidth = imgWidth + matSizeSides * 2;

        alert("The inside dimensions for your frame are " + frameSizeHeight + " x " + frameSizeWidth + ".");
    }
