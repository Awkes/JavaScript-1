let score = 50;

// if-satsen
if (score >= 50) {
    congratulate();
}
// if-else-satsen
else {
    encourage();
}

function congratulate() {
    let msg = "Congratulations! ";
    msg += "Proceed to the next round.";
    console.log(msg);
}

function encourage()  {
    let msg = "Have another go!";
    console.log(msg);
}

//if...else-if-satsen
let hour = new Date().getHours();
let greeting = '';
if (hour < 12) {
    greeting = 'God morgon!';
}
else if (hour < 17) {
    greeting = 'God dag!';
}
else {
    greeting = 'God kväll!';
}
console.log(greeting);





console.log("---------------------------------------------------");

// == eller ===
let x = '5';
console.log(typeof x);

let y = 5;
console.log(typeof y);

if (x == 5) {          // Farligt
    console.log(x+5);  // 55 (x är String, därför konkatineras x + 5)
}

if (y == 5) {          // OK. men....
    console.log(y+10); // 15
}

if (x === 5) {
    console.log(x +2); // Ingenting, x är String och 5 är Number, så blocket körs aldrig.
}

if (y === 5) {
    console.log(y+5); // 10
}

if (x !== 5) {
    console.log(x+2); // 52
}

if (x != 5) {
    console.log(x+4); // Ingenting, String x är lika med 5, så blocket körs aldrig.
}

console.log("----------------------------------------");

// Ternary operatorn ? : ( villkor ? "om true, gör" : "om false, gör" )
function getFee(isMember) {
    return isMember ? "20 kr" : "100 kr";
}

// Samma funktion fast med if/else, en utan och en med måsvingar.
function getFee2(isMember) {    
    if (isMember) { return "20 kr"; }
    else { return "100 kr"; }
}
function getFee3(isMember) {    
    if (isMember) return "20 kr";
    else return "100 kr";
}

console.log(getFee(true));
console.log(getFee(false));
console.log(getFee2(true));
console.log(getFee3(false));

console.log('-------------------------------------------');

