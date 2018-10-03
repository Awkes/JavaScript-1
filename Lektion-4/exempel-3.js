// Arbeta med primitiva datatyper

// 1. string
let firstName = "Andreas";
let lastName = 'Åkerlöf';
console.log(firstName,lastName) ;
console.log("It's very nice!");
console.log(`I love JS!`);  // ECMAScript 6 Template Strings, OBS! Backticks (överkurs).

// 2. number
let age = 34;
const PI = 3.14159;
let price = 5.5;
let quantity = 10;
let total = price * quantity;
console.log(total);

// 3. boolean (true eller false)
let again = false; // eller 0
if (again)
    console.log("Inne i if-satsen");
again = true;
if (again)
    console.log("Nu är vi inne i if-satsen");

// 4. undefined (OBS! Detta är en typ i JS), en variabel som deklarerats men inte innehåller något värde.
let name;
console.log(name);

console.log(mobile); // OK eftersom mobile deklarerats med var (längre ner i koden), kommer dock visa undefined.
var mobile;
mobile = "073-4567890";

// console.log(adress); // EJ OK, let variabler måste deklareras innan de används.
let adress;
adress = "Apskalsgatan 2";

// 5. null
let nothing = null;

// Kontrollera typer

console.log("again =",typeof again);
console.log("mobile =",typeof mobile);
console.log("age =",typeof age);
console.log("PI =",typeof PI);
console.log("nothing =", typeof nothing);