/*
Skriv ett program som skriver
ut en tabell för talen 1 till 12.
På varje rad i tabellen skall
talet visas liksom talet i
kvadrat och talet i kubik.
*/

console.log('x\tx^2\tx^3');

for (let i = 1; i <= 12; i++) {
    console.log(i + '\t' + Math.pow(i,2) + '\t' + Math.pow(i,3));
}