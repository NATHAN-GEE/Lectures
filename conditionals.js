/* js conditionals allows us to carry out actions according to those decisions.
 */
/*
    -if else statements
    -ternary operator
    -switch statement
//     -conditionals execute code by default unless not true
//     */

// let myBoolean = 25;

// if (myBoolean) {
//   console.log("There is something here."); //runs nothing if it isn't true, like this case
// }

// if (myBoolean) {
//   console.log(`My number is ${myBoolean}.`);
// } else {
//   console.log(`Where is my number bro?`);
// }

// /*
// if (condtion)
// will run the code
// else --will run if the condition is false
// */

// //Else statements

// let temp = 70;

// if (temp > 100) {
//   console.log("Global warming bro!");
// } else if (temp > 50 && temp < 60) {
//   console.log("It's nice out today."); //It will break out of the loop when it hits the true statement.
// } else if (temp > 60) {
//   console.log("It's no good today."); //It will break out of the loop when it hits the true statement.
// } else {
//   console.log("Its too cold!");
// }

// let myName = "Danielle";
// let age = 20;

// if (myName == "Paul" && age == 25) {
//   console.log(`${myName} is lying to you he is not ${age}.`);
// } else if (myName == "Danielle" && age >= 21) {
//   console.log(`She's your instructor, but we dont know her age.`);
// } else {
//   console.log("Im lonely.");
// }

//Ternary Conditional

/*
  A ternary is a conditional statement taht takes 3 operands
    -Takes a condition followed by a question mark
    -truthy expression followed by a :
    -falsey expression 
  - Shortcut to the if statement
 */

// let lightSwitch = true;
// //condition ? true statment : else/false statement

// lightSwitch ? console.log("lights are on") : console.log("lights are off");

// let temp = 90;

// // temp >= 100
// //   ? console.log("Am I in Florida?")
// //   : temp >= 80
// //   ? console.log("Fine summer day!")
// //   : temp >= 60
// //   ? console.log("Spring or Fall")
// //   : temp >= 40
// //   ? console.log("What's next snow please?!")
// //   : console.log("I asked for the temperature, not your life story!");

// //Switches Statements
// /* switches evalutes expressions matchiing their expression value to a case clause. Switch then executes that case statement until it is false */
// console.log("-----------------------");
// switch (true) {
//   case temp >= 100:
//     console.log("Am i in Flordia");
//     break;
//   case temp >= 80:
//     console.log("Fine summer day");
//     break; //You have to have the Break Statement to make sure the code breaks when it finds true statment other wise it will execute all.
// }

// switch (new Date().getDay()) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
// }

//Challenge
//FizzBuzz with if else conditional

// let myNum = 33;

// if (myNum % 3 === 0) {
//   console.log("Fizz");
// } else if (myNum % 5 === 0) {
//   console.log("Buzz");
// } else if (myNum % 3 === 0 && myNum % 5 === 0) {
//   console.log("FizzBuzz");
// } else {
//   console.log(myNum);
// }
// console.log("--------------------");

// //FizzBuzz with ternary Operator:

// myNum % 15 === 0
//   ? console.log("Fizz Buzz!")
//   : myNum % 5 === 0
//   ? console.log("Buzz")
//   : myNum % 3 === 0
//   ? console.log("Fizz")
//   : console.log(myNum);

// console.log("--------------------");

// //For loop
// //FizzBuzz
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


document.body.style.cssText = 'display: flex; flex-direction: column; display-content: center'
let input = document.createElement('input')
document.body.append(input)
let button = document.createElement('button')
button.innerText = "Submit"
document.body.append(button)
let feedback = document.createElement('h2')

let randomNumber = Math.floor(Math.random()*10 + 1);
console.log(randomNumber)

let correct = Number(randomNumber);
console.log(correct)
button.onclick = function (){
let guess = Number(input.value);
console.log(guess)
 
  if (guess == correct){
  console.log( `Correct! you have won!`);
  feedback.innertext = `You are correct`;
}
  else if(guess > correct){
    console.log('to hight');
  feedback.innertext = `Your number is too high`;
}
 else{
   console.log('to low');
   feedback.innertext = `Your number is too low`;
 }
 } 
document.body.append(feedback)