// Övning - Mobilräkning
// Steg 1: Läs in minuter/kostnad
let minuter = 100; // +prompt('Hur många minuter ringer du i snitt per månad?');
let kostnad = 10; // +prompt('Vad är kostnaden per minut?');

// Steg 2: Beräkna totalkostnad
let rabattsats = 0.1;
let total = minuter * kostnad;
let resultat = total<1000 ? total : total*(1-rabattsats); //  om kostnad är < 1000 ? total summa : annars total summa med 10% rabatt
console.log(`
    Din kostnad per månad är: ${resultat}.
    Din rabatt är: ${total*rabattsats}.
    Totalkostnad: ${total}.
`);

// Övning - Gym
// Steg 1: läs in värden
let arskort = 1000;
let biljett = 100;
let besok = 20;

// Steg 2: kontrollera om det lönar sig med årskort eller enskilda biljetter
let billigast = (arskort < (biljett*besok))
    ? `Det lönar sig att köpa ett årskort!\nKostnad för årskort: ${arskort}kr\nKostnad för ${besok} besök: ${biljett*besok}kr.`
    : `Det lönar sig att köpa enstaka biljetter!\nKostnad för årskort: ${arskort}kr\nKostnad för ${besok} besök: ${biljett*besok}kr.`;

// Steg 3: Skriv ut
console.log(billigast);


console.log('');

// Övning - Matteprov

let poang = 47;

if (poang >= 45) { console.log("A"); }
else if (poang >= 40) { console.log("B"); }
else if (poang >= 35) { console.log("C"); }
else if (poang >= 30) { console.log("D"); }
else if (poang >= 25) { console.log("E"); }
else { console.log('Du är underkänd!')}