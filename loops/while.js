//While Loops

/* 
    While statment creates a loop as long as the condition is true

    while(condition){
        code statement
    }
*/
// let i = 0;
// while (i <= 25) {
//   console.log(i);
//   i++; //i += 1
// }

//CHALLENGE
//
// for (let i = 100; i <= 500; i++) {
//   console.log(i);
// }

// //FIZZ BUZZ
for (i = 100; i <= 500; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
