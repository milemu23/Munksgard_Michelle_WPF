//Michelle Munksgard
//November 6, 2014
//Assignment: Expressions
//Personal

//Determine the profit after all fees are taken out.
//I sell t-shirts on Ebay and on Etsy. All shirts sell for $20. Ebay takes 10% + $.30. Etsy takes 3.5% + $.20. Paypals fee is $.88. The cost to make the shirt is $8. What is the profit for each after fees and costs?

var shirtPrice = 20;
var eBayFees = ((10/100) * shirtPrice + .30);
var etsyFees = ((3.5/100) * shirtPrice + .20);
var paypalFees = .88;
var costShirt = 8;

var fromEbay = 20 - eBayFees - paypalFees - costShirt;
var fromEtsy = 20 - etsyFees - paypalFees - costShirt;

console.log("Each shirt sells for $" + shirtPrice + ". When sold on eBay, I make a profit of $" + fromEbay + " and when sold on Etsy, I make a profit of $" + fromEtsy + "." );