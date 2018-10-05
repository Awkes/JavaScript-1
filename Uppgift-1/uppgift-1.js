// Exempel och test av kod för Inlämningsuppgift 1.

console.log("");

// Del 1

// Fråga 2 - Dynamisk typning

let variabel;	// när variabeln deklareras blir datatypen undefined
console.log(variabel);
variabel = "text";	// datatypen ändras till string
console.log(variabel);
variabel = 13;	// datatypen ändras till number
console.log(variabel);
variabel = true;	// datatypen ändras till boolean
console.log(variabel);
variabel = null;	// datatypen ändras till null
console.log(variabel+"\n");

// Fråga 3 - console

console.warn("text") // skriver ut ”text” som ett varningsmeddelande
console.error("text\n") // skriver ut "text" som ett felmeddelande

// Fråga 10

let cars = new Array(2)
cars[cars.length] = "Volvo"
console.log(cars+"\n")


// Del 2

// .isArray()
let array = ["Värde 1","Värde 2"];
console.log(Array.isArray(array)); // Skriver true
let inteArray = "Värde";
console.log(Array.isArray(inteArray)); // Skriver ut false

// sort() och reverse()

let sortArray = ["Ost","Glass","Fisk","Cykel","Boll"];
console.log(sortArray.sort()); // Skriver ut [ 'Boll', 'Cykel', 'Fisk', 'Glass', 'Ost' ]

let reverseArray = [1,2,3,4,5,8,4];
console.log(reverseArray.reverse()); // Skriver ut [ 4, 8, 5, 4, 3, 2, 1 ]

console.log("");

// Skapar 3 arrayer, som sedan läggs ihop till en och skrivs ut i konsolen.
let conArray1 = ["Ost","Glass"];
let conArray2 = ["Cykel","Boll","Apa"];
let conArray3 = ["Fisk","Bok"];
let conArrays = conArray1.concat(conArray2,conArray3);
console.log(conArrays);

// Lägger ihop arrays värden till en sträng och skriver ut den i konsolen med " - " som separator
let joinArray = ["Ost","Glass"];
console.log(joinArray.join(" - "));

// Konverterar array till string och skriver ut den med kommaseparerade värdne.
let stringArray = [3,2,1,4];
console.log(stringArray.toString());

// Kopierar position 3 och 4 till position 0 och 1, och skriver ut resultat.
let copyArray = [0,1,2,3,4,5,6,7,8,9];
console.log(copyArray.copyWithin(0,3,5));

// Skapar en array med 5 tomma element, fyller den med Andreas och skriver ut resultat.
let fillArray = new Array(5);
console.log(fillArray.fill("Andreas"));

console.log("");

// Skapar en array av strängen "Andreas", varje tecken blir ett element
let fromArray = Array.from("Andreas");
console.log(fromArray);

// Kontrollerar om array innehåller "Glass" och returnerar true
let incArray = ["Gädda","Sork","Glass","Korv"];
console.log(incArray.includes("Glass"));

console.log("");


// Kontroller om array innehåller "Fisk", returnerar index (3).
let indexArray = ["Apa","Gris","Ko","Fisk","Fisk"];
console.log(indexArray.indexOf("Fisk"));

// Kontroller om array innehåller "Fisk", returnerar index (4).
let lastArray = ["Apa","Gris","Ko","Fisk","Fisk"];
console.log(lastArray.lastIndexOf("Fisk"));

console.log("");


// Tar bort och returnerar sista värdet ("Tre") ur arrayen
let popArray = ["Ett","Två","Tre"];
console.log(popArray.pop());

// Skapar och lägger till fler element i array, returnerar ny length (5)
let pushArray = ["Ett","Två","Tre"];
console.log(pushArray.push("Fyra","Fem"));

console.log("");

// Tar bort och returnerar första värdet ("Ett") ur arrayen
let shiftArray = ["Ett","Två","Tre"];
console.log(shiftArray.shift());


console.log("");

// Skapar och lägger till ett element i början av array, returnerar ny length
let unshiftArray = ["Ett","Två","Tre"];
console.log(unshiftArray.unshift("Noll"));

console.log("");

// Skapar en array, och sedan en ny array från den första, som skrivs ut.
let sliceArray = [0,1,2,3,4,5,6,7,8,9];
console.log(sliceArray.slice(2,7));

console.log("");

// Skapar array och skriver ut den två gånger
let valueArray = ["Ett","Två","Tre"];
console.log(valueArray);
console.log(valueArray.valueOf()); // Gör exakt samma föregående rad

console.log("");