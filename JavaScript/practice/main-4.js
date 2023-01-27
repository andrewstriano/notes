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


carsThree.length; // gives the length of the array (number of index items).
carsThree.sort(); //sorts the array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;

console.log(length); // 4, the number of items in the array.

let firstFruit = fruits[0]; // returns the first array item (banana).

let lastFruit = fruits[fruits.length -1]; // returns the last fruit.

let fLen = fruits.length;

let text = "<ul>";
for (i=0; i < fLen; i++) {   // loops through the fruit array
    text += "<li>" + fruits[i] + "</li>"; // and assigns li tags for
};                                  // each fruit array item.
text += "</li>"; // adds the closing li tag to the newly formed list.

document.getElementById("fruit-list").innerHTML = text; 

const veggies = ["Carrots", "Cucumbers", "Tomatoes", "Broccoli"];

let text2 = "<ul>";
veggies.forEach(myFunction);
text2 += "</ul>";

function myFunction(value) {
    text2 += "<li>" + value  + "</li>";  // this does the same as above but it using the foreach() function.
};

document.getElementById("veggie-list").innerHTML = text2;

fruits.push("Lemon"); // adds the push element to the array fruits.

fruits.pop(); // removes the last element in an array.

fruits[fruits.length] = "Strawberry"; //adds strawberry to the end of fruits[].

const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined

// arrays cannot use named indexes, this turns the array into an object
// and will not allow you to use array methods.

//Arrays in javascript are just objects with numbered indexes.

const points1 = new Array();
// const points = []; this does the same as above 

const points2 = new Array(40, 100, 1, 5, 25, 10);
const points3 = [40, 100, 1, 5, 25, 10];

// these still do the same thing.

const points4 = new Array(40);
const points5 = [40];
// the top creates an array named points with 40 undefined elements.
// the bottom creates an array with one element with value 40.

Array.isArray(fruits); // returns a boolean if the input is an array.

fruits instanceof Array; // returns true if an object is created by a given constructor.

// -----------------------SOME HELPFUL METHODS-------------------------


const foods = Array(3); // creates new array with 3 undefined elements.

foods.push("spaghetti", "chicken", "steak"); // adds these three strings to the array.

document.getElementById("food-string").innerHTML = foods.toString(); // turns the array into a string

document.getElementById("food-string").innerHTML = foods.join(); // behaves the same way but lets you chose the separator.

let food1 = foods.pop(); // removes the last element in the array and assigns it to food.

let foodLength1 = foods.push("Steak"); // adds the parameter as an element in the array
//and returns the new array length when assigned to a variable.

let food = foods.shift();// removes the first element and shifts everything
//else down into a lower index.

let foodLength = foods.unshift("spaghetti");// adds the parameter into the front of an array.
// unshifts every other element. returns the new array length.

const myFavoriteFoods = foods.concat(fruits);
// concatenates the two strings into a new third string.

foods.splice(2, 0, "Lemon", "Kiwi") // splices new elements into an array
// the first value is where new elements should be added in
// the second value shows how many elements to be removed,
// the rest of the parameters are the values to be added in.

foods.splice(0, 1); // this would remove one element at 0, with nothing added.

const newFruits = fruits.slice(1,3); // creates a new array with a slice
//taken out of it, it removes 1-3 but not including the last number (3).



