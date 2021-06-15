/* there are 6 primitive datatypes
    string
    number
    booleon
    null
    undefined
*/

let myString = "this is a string";

console.log(myString);

//numbers

let num = 15;
console.log(num);

//concatenate string

let firstName = "san";
let lastName = "gee";

console.log(firstName + " " + lastName);
console.log(firstName.concat(" ", lastName));
console.log(`Hello ${firstName} ${lastName}, \nwelcome to web dev!`);

//booleans

/*
    True of False values
    -Flasey Values
        - 0
        - empty string ""
        - null
        - undefined
        - false
        - NaN
    -all other values are truthy
*/

console.log(Boolean(1));
console.log(Boolean([]));

let truthy = Boolean(5);
console.log(truthy);

let falsey = Boolean(0);
console.log(falsey);
