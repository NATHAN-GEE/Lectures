//CLASSES

/**
 * Templates for creating objects. They encapsulate data with code. JS is a heavily protoype-based OOP language.
 * Classes are considered special functions
 *  -class expression assigning to a variable
 */

//CLASS DECLARATION

// class Teacher {
//   //constructor - a class method for creation and intilization of a class object. (A Template)
//   constructor(name, subject, tenure, isPolyglot) {
//     this.name = name;
//     this.subject = subject;
//     this.tenure = tenure;
//     this.isPolyglot = isPolyglot;
//   }
// }
// //Inialize a class

// let nGee = new Teacher();
// console.log(nGee);

// //OR

// nGee.subject = "Science";
// console.log(nGee);

// //CLASS EXPRESSION

// let House = class {
//   constructor(address, bedrooms, bathrooms) {
//     this.address = address;
//     this.bedrooms = bedrooms;
//     this.bathrooms = bathrooms;
//   }
// };

// let park = new House("12212 Park", 2, 1.5);
// console.log(park);

// //CLASS METHODS

// class Car {
//   constructor(make, model, year, transmission) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.transmission = transmission;
//   }
//   //METHOD
//   greetDriver() {
//     console.log(
//       `Welcome to your ${this.year} ${this.make} ${this.model} with a ${this.transmission} transmission.`
//     );
//   }
//   age(currentYear) {
//     return currentYear - this.year;
//   }
// }
// let porsche = new Car("Porsche", "911", 2018, "manual");
// // console.log(porsche.greetDriver());
// //CHALLENGE

// /**
//  * create a class object called Avengers. Avengers will have properties of name, superpower, age, isDead, keyMovie.
//  * create an instance of that object with the superhero name and its properties.
//  * create a method that console logs the name and keyMovie together
//  * spice mode
//  * create a method that takes the name of the superhero and checks it against two arrays. one with Team Cap and one with Team Tony
//  * and returns which team the superhero was part of during Civil War.
//  */

// let Avengers = class {
//   constructor(name, superpower, age, isDead, keyMovie) {
//     this.name = name;
//     this.superpower = superpower;
//     this.age = age;
//     this.isDead = isDead;
//     this.keyMovie = keyMovie;
//   }
//   movieStar() {
//     console.log(`${this.name} and movies ${this.keyMovie}`);
//   }
//   spicy() {
//     let america = ["squid", "useless"];
//     let bmerica = ["captain", "black-widow", "Iron Man"];
//     if (america.includes(this.name)) {
//       console.log(`Civil War Hero ${this.name}`);
//     } else if (bmerica.includes(this.name)) {
//       console.log(`${this.name} is part of bmerica`);
//     } else {
//       console.log(`Not important really.`);
//     }
//   }
// };
// let tonyStark = new Avengers("Iron Man", "none", 40, true, "Iron Man Series");
// console.log(tonyStark);
// console.log(tonyStark.movieStar());
// console.log(tonyStark.spicy());

// //INHERITANCE

// class Options extends Car {
//   constructor(make, model, year, transmission, seats) {
//     super(make, model, year, transmission); //allows us to use the Parents parameters
//     this.seats = seats;
//   }
// }
// let bmw = new Options("bmw", "m5", 2016, "dct", "leather");
// console.log(bmw.age(2021)); can access methods from the parent class when you extend it

//Challenge

let House = class {
  constructor(address, bedrooms, bathrooms) {
    this.address = address;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }
};

class Sale extends House {
  constructor(
    address,
    bedrooms,
    bathrooms,
    appraisalValue,
    listPrice,
    agent,
    isListed
  ) {
    super(address, bedrooms, bathrooms);
    this.appraisalValue = appraisalValue;
    this.listPrice = listPrice;
    this.agent = agent;
    this.isListed = isListed;
  }
  calculate() {
    let percentage = 0.2 * this.appraisalValue;
    console.log(percentage);
    let price = this.listPrice - this.appraisalValue;
    let newPrice = percentage - price;
    if (price > percentage) {
      return `Its North by ${newPrice}`;
    } else {
      return `Its a good value by differnce of ${newPrice}, baby! `;
    }
  }
}
let juicyHouse = new Sale(
  "12212 Park",
  3,
  2,
  200000,
  230000,
  "Dave Chapelle",
  true
);
console.log(juicyHouse);
console.log(juicyHouse.calculate());
