"use-strict";
//Scope

/*
    Scope determines how the variables are accessed.
        - Global
        - Block
        - Function
*/

//Global Scope
let x; //would be global scope ex window document js file itself
//global scope can be accessed by any scope.
//console.log(x);

function addOne() {
  x = 1;
}
addOne();
//console.log(x);

//Function Scope

// function carName() {
//     let name = "Maserati"
//     var model = "GranTurismo"
//     if (true) {
//         let year = 2013;// let will not let you console.log it is scope to the enclosing function.
//     }
//     console.log(year)
// }
// carName();
// console.log(model);
// console.log(year);

//Let/Const vs Var

/* 
    let is scoped to the immediate enclosing block of code
    var is hoisted and scoped to the immediate funciton block
    */

// {
//     //let blockScopedVariable = "block scope"
//     //refernceError scoped to this block
//     //var functionScopedVariable = "function scope"
//     //Function scope is the same as global scope so it works in this block
// }

//console.log(functionScopedVariable)

//Hoisting

/*
    JS is an interpreted language that is being read top to bottom and left to right
    The parser, which reads the code, goes over it twice
        first to hoist to assign memory locations to all Var(riables) declaration as well as Funciton Declarations.
        Secon pass the parser reads the values and the expression that you have assigned
*/

// let y;
// console.log(y)

//first pass it gets assgied value undefined
//then console.log reads the value undefined

//Code  below results in an error because let doens't get hoisted.
// console.log(z);
// let z;

// console.log(a);
// var a;

// console.log(cheese);// shows undefined because on the first pass it only grabs the declaration so it doesn't get the value until the second pass.
// var cheese = "Gouda";
// console.log(cheese);// returns gouda because hoisted declaration has been reassigned with the value of Gouda.

// //Hoisting & Function Declaration vs Function Expression.

// //Function Declaration
// function helloWorld() {
//     console.log("Hello World from the other side.")
// }
// //Function Invocation
// helloWorld();//Invoking/Call the function

let addNums = function (x, y) {
  console.log(x + y);
};
addNums(5, 5);

let addNums = 10;
console.log(addNums);
