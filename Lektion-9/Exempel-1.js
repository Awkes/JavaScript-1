// Arbeta med inbyggda glovala JS-objekt

// Objektet String

let firstName = "Andreas";
console.log(typeof firstName); // typen är String

let antal = firstName.length;
console.log(antal); // 7

// Konvertera till gemener
firstName = firstName.toLowerCase(); // variabeln måste uppdateras annars sparas inte konverteringen
console.log(firstName);

firstName = firstName.toUpperCase();
console.log(firstName);

// Konkatenering (sätta ihop strängar)
let lastName = "Åkerlöf";
let fullName = firstName.concat(' ',lastName);
console.log(fullName);


// substring(start,slut)
console.log(fullName.substring(0,7));
console.log(fullName.substring(8));
let space = fullName.indexOf(" ");
console.log(fullName.substring(0,space));
console.log(fullName.substring(space+1));

// substr(start,längd)
// ANDREAS Åkerlöf (hämta initialer)
console.log(fullName.substr(0,1) + fullName.substr(space+1,1));

// Strängar i JS indexeras på samma sätt som arrayer
console.log(fullName[0]+fullName[space+1]); // Skriver också ut initialer

// Skriv ut sista tecknet i strängen
console.log(fullName[fullName.length-1]); // Sista bokstaven

// Skriv ut index på första mellanslaget
console.log(fullName.indexOf(" "));

// Skriv ut tecken på index 2
console.log(fullName.charAt(2)); 


// split(separator)
let nameArray = fullName.split();
console.log(nameArray); // ['ANDREAS Åkerlöf']

nameArray = fullName.split('');
console.log(nameArray); // [ 'A', 'N', 'D', 'R', 'E', 'A', 'S', ' ', 'Å', 'k', 'e', 'r', 'l', 'ö', 'f' ]

nameArray = fullName.split(' ');
console.log(nameArray); // [ 'ANDREAS', 'Åkerlöf' ]

fullName = 'Bo;Kenneth;Andreas;Åkerlöf';
nameArray = fullName.split(';');
console.log(nameArray); // [ 'Bo', 'Kenneth', 'Andreas', 'Åkerlöf' ]

fullName = "  Bo   Kenneth   Andreas   Åkerlöf   ";
nameArray = fullName.split(' ');
console.log(nameArray);


// Chaining
nameArray = fullName.trim().split(' ');
console.log(nameArray);


fullName = 'Bo;Kenneth;Andreas;Åkerlöf';
// byt ut ; mot mellanslag
fullName = fullName.replace(/;+/g,' '); // RegExp (överkurs), efter första / tecken som ska sökas efter, + innebär flera förekomster /g = globalt
console.log(fullName);

// Escape-tecken
// \n new line
// \" eller \' för att visa " eller ' i en sträng
// \t lägger till en tab
console.log("\nHej\nVälkommen till \"JS\".\n\nIdag har vi jobbat med string\n\n");
console.log('Hej och välkommen till \'JS\'');
console.log('Andreas\tÅkerlöf');
console.log('Erika\tÅkerlöf');