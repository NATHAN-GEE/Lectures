//FizzBuzz
// myNum = 34;

// for (i = 0; i < myNum; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Fizz Buzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

// For loops
/* A way to preform mundane tasks over and over. Loops interate over an interable such as 1-100
    - for (start param; stop param; step param
        -code applied to each step of the iteration.
    */

// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }
// for (let i = 100; i >= 0; i--) {
//   console.log(i);
// }

// Loop over string index
let myName = "Nathan Gee";
for (char = 0; char < myName.length; char++) {
  console.log(myName[char]);
}
