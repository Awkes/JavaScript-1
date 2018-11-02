/*
    Skapa en while-sats som skriver ut alla tal
    mellan 1 och 100, men enbart tal som är
    jämnt delbart med 7
*/

let i = 1;
while (i<=100) {
    if (i%7 === 0)
        console.log(i);
    i++;
}