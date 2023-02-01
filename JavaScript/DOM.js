// <div class= "display"></div>
// div.display
// .display
// #container > div.display
// div#container > div.display

// these are all way to target the above div.

const container = document.querySelector("#container"); // selects the #container div.

console.dir(container.firstElementChild); // selects the first child of #container => .display

const controls = document.querySelector(".controls"); // selects the .controls div

console.dir(controls.previousElementSibling); // selects the prior sibling => display.

// "element".querySelector("selector"); returns a reference to the first match of "selector".

// "element".querySelectorAll("selector"); returns a "nodelist" containing references to all of the matches of he selectors.

// the nodelist is not an array, it looks and acts like one, but is missing some methods.
// you can get around that by using Array.from() or the spread operator.


const div = document.createElement("div"); 
// this creates a new div element, syntax ("tag_type", [options]).
// this does not put the element into the dom, its only created in memory.

// parentNode.appendChild(childNode); appends childNode as the last child of parentNode
// parentNode.insertBefore(newNode, ReferenceNode) inserts newNode into parentNode before referenceNode.

// parentNode.removeChild(child); removes child from parentNode on the DOM and returns a reference to child.

div.style.color = "blue"; // adds the indicated css rule

div.style.cssText = "color: blue; background: white;"; // adds several rules

div.setAttribute("style", "color: blue; background: white;"); // ads several styles

div.style.backgroundColor //accesses the divs background-color style.

div.style["background-color"]; // this works  too
div.style.cssText = "background-color: white;";// works in a string too.

//.div.style.background-color DOES NOT WORK.

// working with classes ============================================

div.classList.add("new"); // adds the class new too the div element.

div.classList.remove("new"); // removes the class new from the div element.

div.classList.toggle('active'); //if div doesn't have class 'active' then it will add it
// and if it does have the class active, then it will remove it.

div.textContent = "Hello World!";
// creates a text node containing hello world and inserts it into div.
div.innerHTML = "<span>Hello World!</span>";
//renders the HTML inside div.
//innerHTML should be used carefully as it open up your program to JS injection vulnerabilities.

const content = document.createElement("div"); // creates a div referenced as content
content.classList.add("content"); // adds the class content to that div
content.textContent = "this is the text-content for content."; // adds this text to the inner text for content.

container.appendChild(content); // appends content inside the container node.


const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";
container.appendChild(para);

const header = document.createElement("h3");
header.textContent = "I'm a blue h3!";
header.style.color = "blue";
container.appendChild(header);

const divOne = document.createElement("div");
divOne.style.cssText = "borderColor: black; border: solid; background: pink;";
container.appendChild(divOne);

const bigHeader = document.createElement("h1");
bigHeader.textContent = "I'm in a div";
divOne.appendChild(bigHeader);

const lilP = document.createElement("p");
lilP.textContent = "ME TOO!";
divOne.appendChild(lilP);

const buttonOne = document.createElement("button");
buttonOne.textContent = "Click me";
container.appendChild(buttonOne);
buttonOne.onclick = () => alert("Hello World");

const buttonTwo = document.querySelector("#btnTwo");
buttonTwo.addEventListener("click", () => {
    alert("Hello World");
});

const buttonThree = document.querySelector("#btnThree");








