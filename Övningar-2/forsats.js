/*
    Skapa en for-sats som skriver ut alla udda tal
    mellan 1 och 30 på en enda rad.
    Lägg till ; mellan varje tal
*/

let result = '';
for (let i=1; i<=30; i++) {
    if (i%2 === 0) 
        result += (i !== 30) ? i+';' : i;
}
console.log(result);