//arrays are objects []

// let list = ['orange', 'banana', 'oreos']

// console.log(list[1]);

// let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Will', 'Amira']];

// console.log(typeof students);
// console.log(students instanceof Array)
// console.log('Hello' + ' ' + students[6][1])

// let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// for (foodItem of food) {
//     console.log(foodItem);
// }

//Push method
// food.push('Hamburger');//appneds the word hamburger to the array of food
// console.log(food);

// food.splice(1, 1, 'bananas')//removes one item at location [1] in the array and optional what to replace
// console.log(food)

// food.splice(2, 0, 'Sweet Potato Pie')
// console.log(food)

// food.pop();//removes the last index of array
// console.log(food)

// food.shift();//removes the last index of array
// console.log(food)

// food.unshift('Thai food')
// console.log(food)

// let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// // for (let i = 0; i < food.length; i++){
// //     console.log(food[i])
// // }

// //food.forEach(x => console.log(x)); arrow function with the for loop

// food.forEach((x, index) => {
//     console.log(x);
//     console.log(index);
// });

// let movies = ["New Hope", "Empire Strikes Back", "Return of the Jedi"];

// movies.forEach((x) => console.log(x));

// movies.push("The Phantom Menace");

// movies.splice(0, 1, "The Clone Wars");

// console.log("---------------------");
// movies.forEach((x) => console.log(x));

// let arr = [1, 2, 3, 4, 5];
// console.log(arr instanceof Array);
// arr.reverse();
// console.log(arr, arr instanceof Array);
// arr.forEach((x) => console.log(x));

// if (arr instanceof Array) {
//     let revArr = arr.reverse();
//     revArr.forEach(num => console.log(num))
// } else {
//     console.log('Not an array')
// }

// const twoNames = function (name1, name2) {
//   console.log(name1, name2);
// };
// twoNames("Nathan", "Nikki");

// const fizzBuzz = function () {
//   for (let i = 0; i <= 100; i++) {
//     if (i % 6 === 0 && i % 8 === 0) {
//       console.log("Fizz Buzz");
//     } else if (i % 8 === 0) {
//       console.log("Buzz");
//     } else if (i % 6 === 0) {
//       console.log("Fizz");
//     } else {
//       console.log(i);
//     }
//   }
// };
// fizzBuzz();

//  const findParameter = function (length, width){
//     let total = (length*2) + (width*2);
//         if(total >=20 ){
//             console.log(`True. The perimeter is ${total}`);
// }else{
//     console.log(`False. The perimeter is ${total}`);
// }

// }
// findParameter(2,2);
// findParameter(10,20);

const library = {
  Name: "",
  Address: "",
  Sections: {
    Collections: [
      {
        Classification: "",
        Count: '',
        Aisle: "",
      },
      {
        Classification: "",
        Count: "",
        Aisle: "",
      },
    ],
  },
};
