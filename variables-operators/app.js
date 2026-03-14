const textHtml = document.getElementById("text");
const numberHtml = document.getElementById("numbers");
const operationHtml = document.getElementById("operations");

let name = prompt(`Type your name:`) || "Manuela";
const age = prompt(`Type your age:`) || 18;
var city = prompt(`Type your city:`) || "São Paulo";

if (name === null) {
  name = manuela;
}

textHtml.innerHTML = `Hi, ${name}! You are ${age} years old and you live in ${city}.`;

let num1 = 40;
let num2 = 20;

numberHtml.innerHTML = `NUMBER 1: ${num1}<br/> NUMBER 2: ${num2}`;

const addition = num1 + num2;
const subtraction = num1 - num2;
const division = num1 / num2;
const multiplication = num1 * num2;

operationHtml.innerHTML = `
    Addition: ${addition}<br/>
    Subtraction: ${subtraction}<br/>
    Division: ${division}<br/>
    Multiplication: ${multiplication}`;

//WITHOUT TEMPLATE STRING
console.log("My name is " + name + " and I am " + age + " years old." );


 //USING TEMPLATING STRING
console.log(`
    Addition: ${addition}
    Subtraction: ${subtraction}
    Division: ${division}
    Multiplication: ${multiplication}`)
