//Functions
/* Function is a block of code that can take in a parameter, perform an action and return a result of that action
    -function declaration
    -function expression
        -arrow function
        -
*/

//Function Declaration

/*
    declaration are hoisted, this is their template.
    function(parameter){
        block of code
        return statement (not needed)
    }
    */

// function funDeclaration() {
//     console.log("this is a funciton")
// }
// funDeclaration();//you have to execute it by calling it otherwise it sits in memory not being used.

// function funDeclaration() {
//     return "this is a funciton"
// }
// console.log(funDeclaration());//you have to execute it by calling it otherwise it sits in memory not being used.

// let result = funDeclaration()
// console.log(result)

// function greetUser(name) {
//   return `Hello ${name}`;
// }

// console.log(greetUser("kinsey"));

// let userName1 = "kinsey"
// let userName2 = "Marshall"
// let userName3 = "Jessica"

// console.log(greetUser(userName1))
// console.log(greetUser(userName2))
// console.log(greetUser(userName3))

// //Arrow functions

// let greeting = () => {
//     console.log('hello friend')
// }
// greeting();

// something = () => {
//     console.log('hello')
// }
// something();

// let sendEmail = (email, name) => {
//     return `hello ${name}:

//     We have been trying to reach you about your car's extended warranty.

//     is this email, the correct email for you? ${email}?

//     sincerely,

//     Annoying People`
// }

// console.log(sendEmail('jfkdaljfkajflajdlkf.com', 'nathan'));

//IIFE immediate invoked function

// (function () {
//   console.log("IIFE");
// })();

// function returnFun(x, y) {
//   //return x, y;// can only return one value so only the 5 is returned.
//   return [x, y];
// }

// //console.log(returnFun().values())

// function tipCalculator(bill, tax, percent) {
//   let total = bill * (tax / 100) + bill;
//   return total * (percent / 100) + total;
// }

// console.log(tipCalculator(100, 7, 20));

// //Spicy challenge

// function capName(name) {
//   let lowerName = name.toLowerCase();
//   let firstLetter = lowerName[0].toUpperCase();
//   return firstLetter + lowerName.slice([1]);
// }
// function capName(name) {
//   let firstLetter = name[0].toUpperCase();
//   return firstLetter + name.slice([1]);
// }
// console.log(capName("jathan"));

//
// function revStr(str) {
//     return (str === '') ? '' : revStr(str.substr(1)) + str.charAt(0);
// }
// console.log(revStr('Paul'));

// function restr1(str) {
//   if (str === "") {
//     return '';
//   } else {
//     return restr1(str.substr(1)) + str.charAt(0);
//   }
// }
// console.log(restr1("paul"));

// let callback = (num) => {
//   // Use this area to solve the challenge!
//   if (num % 2 === 0) {
//     return `The number is even`;
//   } else if (isNaN(num)) {
//     return `what is this?`;
//   } else {
//     return `The number is odd`;
//   }
// };
// callback();
// console.log(callback(20));
// console.log("---------------------------");

// //Test your callback function with the loop here!
// for (let i = 0; i <= 10; i++) {
//   console.log(callback(i));
// }


