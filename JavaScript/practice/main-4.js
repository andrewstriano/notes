let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

const carArray = [car1, car2, car3];

// its best practice to declare arrays using the const keyword.

const cars = ["Saab", "Volvo", "BMW"];

const carsTwo = [
    "Saab",
    "Volvo",
    "BMW"
];

const carsThree = [];  // declares the array, THEN assigns the values
carsThree[0]= "Saab";  // to it.
carsThree[1]= " Volvo";
carsThree[2]= " BMW";

// you can do any of the above or you can use the new keyword.

const carsFour = new Array("Saab", "Volvo", "BMW");

// This does the same as the above, so there is no need to use "new".
// For simplicity, readability, and execution speed, use literals.


//You can access an array element by referring to the index number.

let car = carsThree[0];

console.log(car); // Saab

// you can also change the values of arrays by using the idex number.

carsThree[0] = "Opel";
carsThree[2] = " 4Runner"
document.getElementById("demo").innerHTML = carsThree;


