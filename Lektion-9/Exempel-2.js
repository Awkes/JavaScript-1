console.log("\n########## Arbeta med objektet Number ##########\n");

// Arbeta med objektet Number

let PI = 3.14159;
console.log(typeof PI);

console.log(PI.toFixed(2)); // Avrundar till två decimaler
console.log(PI.toPrecision(2)); // Avrundar och visar sammalagt 2 siffror

// MIN_VALUE och MAX_VALUE, minsta respektive störssta värdet som kan 
// användas i Number, lägg till - för att göra samma sak på negativa värden
console.log(Number.MAX_VALUE); // Största värdet
console.log(Number.MIN_VALUE); // Lägsta värdet
console.log(-Number.MAX_VALUE); // Största negativa värdet
console.log(-Number.MIN_VALUE); // Minsta negativa värdet
console.log(Number.MAX_VALUE*2); // Infinity (när vi hamnar utan för max/min-värden)

// NaN
let x;
console.log(x); // undefined
x = x+2;
console.log(x); // NaN
// Statiska metoder
console.log(Number.isNaN());  // false
console.log(Number.isNaN(x)); // true


// Objektet Math

PI = Math.PI;
console.log(PI);

console.log(Math.E);

console.log(Math.abs(-8769)); // Absolut värde: 8769
console.log(Math.pow(2,2));  // 2*2 = 4
console.log(Math.pow(2,4)); // 2*2*2*2 = 16
console.log(Math.sqrt(25)); // Roten ur 25 = 5

// Avrunda till närmaste heltal
let pris = 10.40;
console.log(Math.round(pris)); // 10
pris = 10.50;
console.log(Math.round(pris)); // 11
// eller
console.log(pris.toFixed()); // 11

// Ceil och floor
let tal = 10.10;
tal = 10.99;
console.log(Math.ceil(tal)); // 11
console.log(Math.floor(tal)); // 10

// Max och min
console.log(Math.max(1,4,743,232,13,133)); // 743
console.log(Math.min(1,4,743,-232,13,133)); // -232


// Slumptal
console.log(Math.random()); // mellan 0 och 1
console.log(Math.floor(Math.random() * 10) +1); // mellan 1 och 10
console.log(Math.floor(Math.random() * 10) +1); // mellan 1 och 10
console.log(Math.ceil(Math.random() * 10)); // mellan 1 och 10
console.log(Math.ceil(Math.random() * 10)); // mellan 1 och 10

