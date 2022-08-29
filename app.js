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
let cars = [];

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

// ! 3. function drwCars() kuri nupiesia tiek auto kiek ivesta userio
// ! 3.1 susikuriam tuscia aaray globaliai cars i kuri supushinam tiek objektu kiek useris ivede auto
// kurti panaudojant kalse Car is sukurti loopa kol pasieksim numberOfCars
// kaip parametra i Car klase, paduoti array indexa (i)
// ! 3.2 sukt loopa per visus car array objektus is kiekvienam is ju:
// ! sukurti nauja HTML elementa div, prideti klase 'car', nurodyti pozicija per .style.top = 60 * car.id + 'px'
// ! ir apendinti i dokumenta

// ? 3.1

function drawCars(amount) {
  for (let i = 0; i < amount; i++) {
    cars.push(new Car(i));
  }
  cars.forEach((car) => {
    const newCar = document.createElement("div");
    newCar.classList.add("car");
    newCar.style.top = 100 + 60 * car.id + "px";
    document.querySelector("body").append(newCar);
  });
}

function drawFinishLine(amountOfCars, distance) {
  const finishLine = document.createElement("div");
  finishLine.classList.add("finishLine");
  finishLine.style.height = 60 * amountOfCars + "px";
  finishLine.style.left = distance + 100 + "px";
  finishLine.style.top = "100px";
  document.querySelector("body").append(finishLine);
}

// ! 5. function pace() - nustatom greiti
// pasidarom intervala kad kviestu fn pace() kas 2s
// funkcijoje kiekvienam auto sugenruojam per kiek pagreites/paletes (max 5)
// ir su dar vienu Math.random() nustatom ar greitinsim ar letinsim
// paleidziam intervala; galim pasiloginti

function pace() {
  cars.forEach((car) => {
    const amount = Math.floor(Math.random() * 6);
    if (Math.random() > 0.5) {
      car.accelerate(amount);
    } else {
      car.slowDown(amount);
    }
  });
}

// ! 6. fn move() - pajudinam
// ? 6.1
// pasidarom intervala kad kviestu fn move() kas 0.5s
// funkcijoje:
// is pradziu vienam cikle pajudinam kiekviena auto, ir pajudine pakeiciam konkretaus auto left css savybe per kiek nuvaziavo

function move() {
  cars.forEach((car) => {
    car.move();
    document.querySelectorAll(".car")[car.id].style.left = car.distance + "px";
  });
  // ? detect win
  cars.forEach((car) => {
    if (car.distance >= distance) {
      clearInterval(paceInterval);
      clearInterval(moveInterval);
      const winnerText = document.createElement("div");
      winnerText.classList.add("winner-text");
      winnerText.textContent = `Winner is car: ${car.id + 1}!!!`;
      document.querySelector("body").append(winnerText);
    }
  });
}

getUserInput();
drawCars(numberOfCars);
drawFinishLine(numberOfCars, distance);
pace();

let paceInterval = setInterval(pace, 2000);
let moveInterval = setInterval(move, 500);
