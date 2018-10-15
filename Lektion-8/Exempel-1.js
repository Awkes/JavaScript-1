// Arbeta med konstruktorer

console.log("");

// Skapa ett nytt objekt med hjälp av en konstruktor
let andreas = new Object();

// Lägg till egenskaper
andreas.name = "Andreas Åkerlöf"; 
andreas.age = 34;

// Lägg till metoder

// En metod som skriver ut info
andreas.print = function() {
    console.log(this.name + " är " + this.age + " år gammal!");
}

// En metod som returnerar info
andreas.info = function() {
    return this.name + " är " + this.age + " år gammal!!";
    // return `${this.name} är ${this.age} år gammal!`; // Modern syntax, post 2015
}

// Använd objektets egenskaper
console.log(andreas.name);
console.log(andreas.age);

// Använd objektets metoder
andreas.print();
console.log(andreas.info());


// Lika objekt skapad via literal
let erika = {
    name  : "Erika Åkerlöf",
    age   : 31,
    print : function() {
        console.log(this.name + " är " + this.age + " år gammal!!!");
    },
    info  : function() {
        return this.name + " är " + this.age + " år gammal!!!!";
    }
}

erika.print();
console.log(erika.info());

// Sammanfattning - Olika sätt att skapa objekt i JS
// 1. Literal Notation
let vadSomHelst = {};

// 2. Constructor Notation
let ettAnnatObjekt = new Object();

console.log("");