let x = '5';
if (x == 5)
    console.log(x + 2); // 52

x = 5;
if (x === 5)
    console.log(x + 2); // 7

console.log('----');

// Tabell för 1-10 (x, x^2, x^3)

console.log('x\tx²\tx³');
for (let x=1; x<=10; x++) {
    console.log(x+'\t'+Math.pow(x,2)+'\t'+Math.pow(x,3));
}

console.log('---');

// Tabell för 1-10 (x, x/2, x/3)

console.log('x\tx/2\tx/3');
for (let x=1; x<=10; x++) {
    console.log(x+'\t'+(x/2).toFixed(2)+'\t'+(x/3).toFixed(2));
}

console.log('---');

/*
  Dagens maträtt
  Skapa en array över dina favoriträtter.
  Programmet ska slumpmässigt välja en maträtt (som jag kallar X här nedan)
  Visa på sidan (ej alert) meddelandet. ”Dagens maträtt är X”.
  På fredagar ska programmet alltid visa följande meddelande. ”Du ska äta ute idag!”
*/

let favoMat = [
    'Spenat och fetaost-lasagne',
    'Tacos',
    'Quornfärssås',
    'Pizza',
    'Quornstroganof',
    'Halloumiburgare',
    'Pulled Oumph'
];

let veckoDag = new Date().getDay();
if (veckoDag === 5)
    console.log('Du ska äta ute idag!');
else 
    console.log('Dagens maträtt är: '+favoMat[Math.floor(Math.random()*favoMat.length)]);