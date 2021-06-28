// Array destructuring

//Spread Operator
/**
 * spread operator pulls out all elements of the array
 * and gives you a stand alone array
 */

let fullName = ["paul", "Niemczyk"];
let friend = ["Nathan", "Gee"];
let tempArr = [...fullName, ...friend];
// console.log(tempArr.values);

// console.log(tempArr);

//Random item in Array
let prices = [1, 2.99, 10.99, 5.23, 27.99];
// console.log(prices[Math.floor(Math.random() * prices.length)]);

//Spread in objects
let person = [
  { name: "Nathan", age: 25 },
  { name: "Anne", age: 20 },
];
person.push({ name: "Freya", age: 21 });
let copyPerson = [...person];
// console.log(copyPerson);

let x = 10;
let y = "abc";

let a = x; //passed by value
let b = y;

let arr = []; // passed by reference get address location of that array in memory Points to it but doesn't copy a new memeory space

//How to avoid changing original and copied arrays
//Return object with own space in memeory

let newPersons = person.map((person) => ({
  name: person.name,
  age: person.age,
}));
console.log(newPersons);

newPersons.push({ name: "Kayce", age: 20 }); //Works because its a new copy in memory
console.log(newPersons);

let ourObject = {
  name: "anne",
  age: 20,
};
//clone object in new memory space
let copiedObject = { ...ourObject };
console.log(copiedObject);

//Array Destructuring
/**
 * allows you to unpack values from arrays aor properites from objects ----> into distinct variables.
 *  similar syntax as array literal
 * left side of assignment
 * used to unpack array.object into disticn cariables
 *
 *
 */

let cities = ["boston", "New York", "Chicago", "LA"];

// let unpackCities = [...cities]
// console.log(unpackCities)

//OLD WAY OF GETTING VALUES
// let boston = cities[0]
// console.log(boston)

//NEW WAY OF GETTING VALUES

let [boston, NewYork, Chicago, LA] = cities;
console.log(boston);
console.log(NewYork);
for (city of cities) {
  console.log(city);
}

//REST SYNTAX

/**
 * rest collectrs multiple eleents and condenses them into one
 *
 */

let cars = [
  "Porsche",
  "BMW",
  "Maserati",
  "Aston-Martin",
  { transmission: "manual", year: 2012, wheelsDriven: "RWd" },
];
let [porsche, bmw, ...otherInfo] = cars;
console.log(porsche);
console.log(bmw);
console.log(otherInfo);

//CHALLENGES

let statesVisited = ["Indiana", "Florida", "Georgia", "California", "NewYork"];
let statesCountries = [...statesVisited, "Ukraine", "Israel", "England"];
console.log(statesCountries);
let [Indiana, Florida, Georgia, California, NewYorks, ...countries] =
  statesCountries; //countries is the variable that the countries get placed too.
console.log(California);

console.log(countries);
let [Ukraine, Isreal, England] = countries;
console.log(Ukraine);


    