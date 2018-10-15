// Skapa egna konstruktorer (Constructors)
// Skapa en blueprint (ritning) på en helt ny grej, t. ex. personer, bilars osv.

// Exempel - Skapa en konstruktor som beskrier en person
// Person blir en ny typ (prototyp)
function Person(name,age) {
    this.name = name;
    this.age = age;
    this.wifes = [];
    this.email = [];
    this.cars = [];
}

// Skapa flera objekt av Person() = skapa nya instanser av Person()
let andreas = new Person("Andreas",34);
let erika = new Person("Erika",31);
// andreas och erika blir två nya referenser till två olika objekt


// Skapa en ny typ som beskriver en bil
function Car(regnr, fabrikat) {
    this.regnr = regnr;
    this.fabrikat = fabrikat;
}

// Skapa en instans av Car = skapa ett objekt
let c1 = new Car("ABC123","Volvo");
// console.log(c1.regnr);
let c2 = new Car("XYZ098","Mazda");

// Andreas köper bilarna c1 och c2.
andreas.cars.push(c1,c2);
console.log(andreas.cars);

console.log(andreas.cars[0].regnr);
console.log(andreas.cars[1].regnr);


// Ändra andreas egenskaper med punktnotation (dot notation)
andreas.name = "Andreas Åkerlöf"
andreas.age++;

// Lägg till egenskaper
andreas.weight = "???";

console.log(andreas);
console.log(erika);
console.log("");

// Skapa en array av ett antal objekt
let persons = [andreas,erika];
console.log(persons);
// Visa info om det första objektet
console.log(persons[0].name);
// Ändra namnet
persons[0].name = "Andreas";
console.log(persons[0].name);

// Objekt kan innehålla arrayer
andreas.wifes.push(erika);
console.log(andreas);

