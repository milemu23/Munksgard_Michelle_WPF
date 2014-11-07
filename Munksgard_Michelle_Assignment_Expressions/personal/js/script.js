//Michelle Munksgard
//November 6, 2014
//Assignment: Expressions
//Personal

//Determine the profit after all fees are taken out.
//I sell t-shirts on Ebay and on Etsy. All shirts sell for $20. Ebay takes 10% + $.30. Etsy takes 3.5% + $.20. Paypals fee is $.88. The cost to make the shirt is $8. What is the profit for each after fees and costs?

var shirtPrice = 20; //amount of shirt before anything is deducted
var eBayFees = ((10/100) * shirtPrice + .30); //calcuate the percentage fee from the shirt price and add the additional fee
var etsyFees = ((3.5/100) * shirtPrice + .20); //calcuate the percentage fee from the shirt price and add the additional fee
var paypalFees = .88; //the fee for paypal
var costShirt = 8; //cost to make the shirt

var fromEbay = 20 - eBayFees - paypalFees - costShirt; //total profit from ebay = sale price of shirts minus all fees and shirt cost
var fromEtsy = 20 - etsyFees - paypalFees - costShirt; //total profit from ebay = sale price of shirts minus all fees and shirt cost

console.log("Each shirt sells for $" + shirtPrice + ". When sold on eBay, I make a profit of $" + fromEbay + " and when sold on Etsy, I make a profit of $" + fromEtsy + "." );