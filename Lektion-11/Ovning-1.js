/*
Övning 1
På en arbetsplats erbjudsman följande lön.
Första dagen tjänar man en krona och sedan fördubblas lönen varje dag.

Skriv ett program som räknar ut hur länge man behöver
arbeta för att tjäna ihop minst 10 miljoner kronor. 
*/

// Med for-loop
let count = 1;
for (var lon = 1; lon <= 10000000; lon*=2)
    count++;
console.log("\n\tDu behöver jobba "+count+" dagar för att tjäna 10 miljoner kronor. Du har då tjänat "+lon+" kronor.");

// Med while-loop
let lonen = 1;
let counting = 1;
while (lonen <= 10000000) {
    lonen *= 2;
    counting++;
}
console.log("\n\tDu behöver jobba "+counting+" dagar för att tjäna 10 miljoner kronor. Du har då tjänat "+lonen+" kronor.");