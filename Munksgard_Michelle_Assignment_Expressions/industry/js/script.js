//Michelle Munksgard
//November 6, 2014
//Assignment: Expressions
//Industry


//As a side business I make frames from scratch. I want to make a frame that fits artwork that is 8 x 10 and one that is 11 x 14.
// The amount of wood need depends on the width of the frame. The user will input the width amount desired and the final amount will be determined.


var frameSides = [8, 10, 11, 14]; //Array lists the sides of each frame that needs to be built
var units = "inches"; //sets the units of measurement
var frame1Width = 0; // starting width for the frame
var frame2Width = 0; // starting width for the frame
frame1Width += Number(prompt("How many inches is the width of the first frame?")); //adds the number the user enters to determine the frame width
frame2Width += Number(prompt("How many inches is the width of the second frame?"));//adds the number the user enters to determine the frame width
var outsideHeight1 = frameSides[0] + frame1Width; // determines the outside dimensions needed for cutting by adding the frame size plus the width of the frame.
var outsideLength1 = frameSides[1] + frame1Width; // determines the outside dimensions needed for cutting by adding the frame size plus the width of the frame.
var outsideHeight2 = frameSides[2] + frame2Width; // determines the outside dimensions needed for cutting by adding the frame size plus the width of the frame.
var outsideLength2 = frameSides[3] + frame2Width; // determines the outside dimensions needed for cutting by adding the frame size plus the width of the frame.


var frame1Total = outsideHeight1 + outsideLength1; // determines the total amount of wood needed for the first frame
var frame2Total = outsideHeight2 + outsideLength2; // determines the total amount of wood needed for the second frame
var totalBoth = frame1Total + frame2Total; // determines the combined total of wood needed for both frames

alert("You will need " + frame1Total + " " + units + " of wood to make Frame 1, outside dimensions would be " +  outsideHeight1 + " x " + outsideLength1 + ". " + "You will need " + frame2Total + " " + units + " of wood to make Frame 2, outside dimensions would be " +  outsideHeight2 + " x " + outsideLength2 + ". " + "You will need " + totalBoth + " " + units + " of wood to make both Frames.");
