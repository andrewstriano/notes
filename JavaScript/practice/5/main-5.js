// let user = new Object(); // object constructor syntax.
//  user = {}; // object literal syntax.
// ///both create ans empty object named user.

// user = { // object named user
//     name: "John", // by key "name" store value "John".
//     age: 30 // by key "age" store value 30.
// };
// // every property has a key or "name" or "identifier" before the : and a value to the right of :.

// //accessing property values is easy using dot notation

// alert(user.name); // John
// alert(user.age); // 30

// user.isAdmin = true; // adds the key "isAdmin" and stores value true by it.

// delete user.age; // deletes the key age and its value 30.

// // we can also use multi word keys they just have to be quoted

// user = {
//     name: "Andrew",
//     age: 26, 
//     "likes birds": true, // multi word property key
// }

// // the last property has a "trailing comma" this makes it easier to add properties and move them around

// let user2 = {};

// //set property
// user2["likes birds"] = true;

// //get 
// alert(user2["likes birds"]); // true

// //delete 
// delete user2["likes birds"]; 

// let key = "likes birds";
// user2[key] = true; 
// // works the same as user2["likes birds"] = true;

// key = prompt("what do you want to know about the user?", "name");
// alert(user[key]); // Andrew if enter name

// //DOES NOT WORK WITH DOT NOTATION

// let fruit = prompt("which fruit do you want?", "apple");
// let bag = {
//     [fruit]: 5, 
// };

// alert(bag.apple); // 5 if fruit = "apple"

// fruit = "apple";
// bag = {
//     [fruit + "computers"]: 5 // bag.appleComputers = 5
// };

// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age,
//         //other properties
//     };
// }

// let user3 = makeUser("John", 30);
// alert(user3.name); // John

// function makeUserShort(name, age) {
//     return{
//         name,
//         age,
//         //other properties
//     };
// }
// user3 = makeUserShort("Andrew", 26);
// alert(user3.name); // Andrew

// // you can name an object property anything you want except for one case

// let obj = {};
// obj._proto_ = 5; // assigns number 5 to _proto_
// alert(obj._proto); // [object Object]

// // -----------------------------check and see if property exists -------------------------
// user = {}; 
// alert(user.noSuchProperty === undefined); // true means "no such property"
// let object = {};
// "key" in object; // checks for the property key in object and returns a boolean

// user = {
//     name: "Andrew",
//     age: 26,
// };
// alert("age" in user); // true user.age = Andrew
// alert("blabla" in user); //false, user.blabla does not exist.
// let age;

// key = age;

// alert(key in user); // true user[key] = 26.


// user = {
//     name: "John",
//     age: 30,
//     isAdmin: true,
// };

// for (let key in user) {
// //keys
// alert(key); // name, age, isAdmin
// //value for the keys
// alert(user[key]); // John, 30, true
// }

// let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     "1": "USA"
// };

// for (let code in codes) {
//     alert(code); // 1, 41, 44, 49
// }

// //integer properties are sorted, string properties are in creation order.
// // an integer property is one that cna be converted to a string and back without changing

// // yes => 41
// // no => +41
// // no => 2.2

// //---------------------------------------------summary--------------------------------
// // Objects are associative arrays with several special features.

// // They store properties (key-value pairs), where:

// // Property keys must be strings or symbols (usually strings).
// // Values can be of any type.
// // To access a property, we can use:

// // The dot notation: obj.property.
// // Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].
// // Additional operators:

// // To delete a property: delete obj.prop.
// // To check if a property with the given key exists: "key" in obj.
// // To iterate over an object: for (let key in obj) loop.
// // What we’ve studied in this chapter is called a “plain object”, or just Object.

// // There are many other kinds of objects in JavaScript:

// // Array to store ordered data collections,
// // Date to store the information about the date and time,
// // Error to store the information about an error.
// // …And so on.
// // They have their special features that we’ll study later. Sometimes people say something like “Array type” or “Date type”, but formally they are not types of their own, but belong to a single “object” data type. And they extend it in various ways.

// // Objects in JavaScript are very powerful. Here we’ve just scratched the surface of a topic that is really huge. We’ll be closely working with objects and learning more about them in further parts of the tutorial.

let schedule = {};
schedule.first = "shower";

function isEmpty(object) {
    for (let o in object){
        return false;
    }
    return true;
}
alert(isEmpty(schedule));

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];    
}
alert(sum);

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

function multiplyNumeric (menu) {
    for (let key in menu) {
        if (typeof(menu[key]) === "number") {
            menu[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
for ( let key in menu) {
    console.log(menu[key]);
}