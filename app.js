//? susirenkam vartotojo imput
//? susikuriam Car klase
//? nusipiesti auto ir finish line
//? nustatom kiekvieno auto greiti
//? judinam kiekviena auto
//? tikrinam win case scenariju
//? pridedam winer text
//? pridedam info text
//? pakeiciam is div i auto img
//? pakeiciam div i finish line
//? jei reikes -> fixes ir update
//? extra taskas - konvertuoti ES6 i ES5 sintakse

// ! 0 Susikuriam globalius kintamuosius numberOfCars ir distance

let numberOfCars = 0;
let distance = 0;

// ! 1. Sukurti function getUserInput(), kuri paims is userio numberOfCars ir distance
// ! ir pacallinam sukurta funkcija

function getUserInput() {
  do {
    numberOfCars = +prompt("Enter number of cars", 5);
  } while (!isPositiveInteger(numberOfCars));
  -1;
  do {
    distance = +prompt("Enter distance", 100);
  } while (!isPositiveInteger(distance));
}

function isPositiveInteger(input) {
  return Number.isInteger(input) && input > 0;
}

// ! 2. Sukurti konstruktoriaus klase Car, kuri tures properties: id, speed distance, methods: accelerate(howMuch), slowDown(howMuch), move()
// ! i konstruktoriu paduodami parametras id, o speed is disntace pradzioj = 0

class Car {
  constructor(id) {
    this.id = id;
    this.speed = 0;
    this.distance = 0;
  }
  accelerate(howMuch) {
    this.speed += howMuch;
  }
  slowDown(howMuch) {
    this.speed -= howMuch;
    if (this.speed < 0) this.speed = 0;
  }
  move() {
    this.distance += this.speed;
  }
}

// getUserInput();
