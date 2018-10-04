// Arbeta med arrayer

// Skapa en tom array
let cars1 = [];

// Skapa en array som innehåller data
let cars2 = ["Volvo","Saab","BMW"]; // Detta är en literal array

// Skapa en array med hjälp av en constructor
let cars3 = new Array(1,2,3); // Skapar en array med värden
let cars4 = new Array();      // Skapar en tom array

// Att komma åt data
console.log("");
console.log(cars2[0]);
console.log(cars2[1]);
console.log(cars2[2]);
console.log(cars2);
console.log(cars2[3]);
console.log("");

// Hämta ett element och spara i en ny variabel
let bil1 = cars2[0];
console.log(bil1);
console.log("");

// Ändra ett värde i en array
cars2[0] = "Mazda";
console.log(cars2);
console.log(bil1);
console.log("");

// En array i JS kan innehålla olika datatyper
let person = ["Andreas","Åkerlöf",34,true]; // En array som innehåller förnamn, efternamn, ålder, gift?.

// Du kan skapa 4 olika variablar istället för en array
let firstName = "Andreas";
let lastName = "Åkerlöf";
let age = 34;
let gift = true;

// Hitta antal element med egenskapen length
console.log(person.length);
console.log("");

// Sortera en array med metoden sort()
console.log(cars2.sort());

console.log("");
console.log("-----------------------------------------------------------------------------------")
console.log("");

// Arbeta med en "stack" (push lägger till element sist i arrayen, och returnerar arrayens längd)

let stack = [];
stack.push("JavaScript 1");
console.log(stack);
stack.push("HTML och CSS");
console.log(stack);
stack.push("JavaScript 2");
console.log(stack);
stack.push();   // Lägger inte till något då värdet är tomt.

let currentLength = stack.push("Bla bla bla"); // Lägger till värde i stacken/arrayen och returnerar arraylängd.
console.log(currentLength);

console.log(stack);
console.log(stack.length);

// Ta bort element, pop() (tar bort sista elementet i en array)
stack.pop();
console.log(stack);

// Spara sista elementet innan borttagning
let kurs = stack.pop();
console.log(stack);
console.log(kurs);

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack);

console.log("");
console.log("---------------------------------------------------");
console.log("");

// Mer om array-konstruktorn
let test1 = new Array(10,20,30); // Skapar en array med 3 element och 3 värden.
let test2 = new Array(10); // Skapar en array med 10 tomma element.
let test3 = [10]; // Skapar en array med ett element som har number 10 som värde.
let test4 = new Array("10"); // Skapar en array med ett element som har sträng 10 som värde.

test2.push(100); // Lägger till värdet 100 på position 10 efter de 10 tomma elementen.

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);

