// let x = 5 < 4;
// console.log(x);

// /* assignment arithmetic comparison compare values
//     -addition +
//     -subtraction -
//     -multi *
//     -division /
//     -exponent **
//     -modulus %
//     -Math. object to help with operations
//     -equality == strict ===
//     - > greater than
//     - < less than
//     - = equal too
//     - != not equal too
//     - and or and not
// */

// let age = 26;

// //Modulus

// console.log(25 % 5);
// console.log(Math.max(5, 200));

// console.log(5 == "5"); //type coercion
// console.log(5 === "5"); // returns false strick value to value

// let date = new Date();
// let year = date.getFullYear();
// let day = date.getDay();
// let month = date.getMonth();
// month += 1;

// console.log(`today is ${day} of ${month} of ${year}`);
// console.log(date.toDateString());
// console.log(date.toUTCString());
// console.log(date.toISOString());

// // And returns true if the two values are the same
// console.log(true && true);
// console.log(true && false);
// console.log(true || false);
// console.log(true || true); //still true because one is still true
// console.log(false || false);

// //strict inequality operator
// console.log("-----------------");

// console.log(true != false);
// console.log(false != false);
// console.log(true != true);

//Challenge

const firstName = "Nathan";
const age = 36;
const city = "fishers";

// console.log(
//   `My name is ${firstName}, I am ${age} years old, and I live in ${city}.`
// );

//////////////////////////////////////////////////

const profile = firstName + " " + age + " " + city;

let result = profile;
// console.log(result.length);
// console.log(result);

//////////////////////////////////////////////////
console.log(result.includes("fishers") && result.toUpperCase());
//console.log(result.toUpperCase());

// console.log(result.toLocaleUpperCase)
