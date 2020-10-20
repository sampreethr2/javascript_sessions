// Declare number as variable
var num1 = 100;
console.log(num1);
console.log(typeof num1);

//Declare number as an object
var number1 = new Number(1000);
var number2 = new Number(1000);
console.log(number1 == number2); //False, two different objects
console.log(number1===number2); // False, value is same but not reference
var number3 = number1;
console.log(number1==number3); // True
console.log(number3 === number1); //=== both object/type and value check, True here
