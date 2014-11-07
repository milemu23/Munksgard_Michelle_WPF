//Casting

var stringVar = "6";
var result = 7 + Number(stringVar); //treat it as a number

console.log(result);

var areaCode = 814;
var firstPart = 397;
var secPart = 1970;

//(814) 397-0970
var phoneNo = "(" + String(areaCode) + ")" + + String(firstPart) + "-" + String(secPart);
console.log(phoneNo);

