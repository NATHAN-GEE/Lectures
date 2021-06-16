//For In Loop

/* 
    For in Loops works by looping over enuerable property names of an object.

    for(iterate over iterable){
        code block to execute over each iterate
    }
*/

let teacher = "Paul Niemczyk";
let randomNumbers = [1, 5, 7, 22, 35, 129, 8];

let person = {
  name: "Paul",
  age: 25,
};

// for (i in teacher) {
//   console.log(i, teacher[i]);
// }

for (i in randomNumbers) {
  console.log(randomNumbers[i]);
}

for (property, value in person) {
    console.log(property, value)
}