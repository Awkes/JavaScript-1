console.log("");

// Aritmetiska operatorer i JS

let y = 5;
let x;

x = y+2; // 7
x = y-2; // 3
x = x+2; // 5
x = x-2; // 3
x = y*2; // 10
x = x*2; // 20
x = y/2; // 2.5
x = y%2; // 1   (% = modulusoperator)
x = 10%3; // 1
x = 7%5; // 2
x = 5%7; // 5

// Ökningsoperator (inkrement)
x=10;
x++; // 11 (x++ ökar alltid med 1)
x++; // 12 (x = x + 1)
x=x+2; // 14
x+=2; // 16

// Minskning
x--; // 15 (Minskar med 1)
x-=2; // 13 (minskar med 2)

// NaN
x = "text";
x = x / 2; // NaN (Not a Number)

console.log("\tx är: "+x);
console.log("\n\n\n-----------------------------------\n\n")

// Konkatenering (lägga ihop strängar), + används i JS, . används i PHP
let firstName = "Andreas";
let lastName = "Åkerlöf";
let fullName = "Hej " + firstName + " " + lastName + "!";
console.log(fullName+"\n");

x = "1" + "2"; // 12
x = "1" + 2;   // 12
x = 1 + "2";   // 12
x = "1" + 2 + 3; // 123
x = 1 + 2 + "3"; // 33 (1+2 kommer först och adderas därför innan det konkateneras med "3")
x = "1" + (2+3); // 15 (Paranteser prioriteras och bearbetas först)


// Implicit typomvandling
x = "1" - "2"; // -1 (JS känner av att strängarna är tal och vi får en automatisk typomvandling
x = 1 - "2"; // -1
x = "1" - 2; // -1

x = "1" * "2"; // 2
x = "1" / "2"; // 0.5

console.log(x+"\n");