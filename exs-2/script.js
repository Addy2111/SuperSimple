let items = 47.93;
let shipping = 4.99;
let beforeTax = 52.92;
// let noTax = (Math.round = beforeTax);

// console.log(noTax)

let tax = Math.round((4793 + 499) * 0.1) / 100;

let order = Math.round(items + shipping);
let total = order + tax;
console.log(total)

// Celcius to Fahrenheit 
let celcius = 25; //Celcius
let fahrenheit = ((celcius * 9) / 5) + 32;
console.log ("25 celsius is to ", fahrenheit, "fahrenheit");

// Fahrenheit to Celsius
let fahrenheit1 = 86;
let celsius1 = ((fahrenheit1 - 32)*5) / 9;
console.log("86 fahrenheit is ", celsius1, "celsius");

// Celcius to Fahrenheit 
let celcius3 = -5; //Celcius
let fahrenheit3 = ((celcius3 * 9) / 5) + 32;
console.log ("-5 celsius is to ", fahrenheit3, "fahrenheit");

let basketball = 2095;
let tax1 = 499;

let mainTax = 499 / 100;

let tshirt = 799;

console.log(`Order: $${((basketball * 2) / 100) + mainTax}, 'and', ${((tshirt*2)/100) + mainTax}`);

console.log(`item $${2+2}: $${((2095*2 + 799*2)/100)}`);
console.log(`Shipping & handling: $${(998)/100}`);
console.log(`Total before tax: $${(5788 + 998)/100}`);
console.log(`Estimated tax (10%): ${(6.79)}`);
console.log(`Order total: $${(6786 + 679)/100}`);

console.log("Single Order");
