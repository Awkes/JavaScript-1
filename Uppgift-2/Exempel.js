// En funktion som anropas och returnerar en sträng.
console.log(minFunktion());

function minFunktion() {
    return "Det här är en funktion!";
}

// En funktion anropas med argument och returnerar sedan argumentet.
console.log(paraFunktion("Detta är ett argument!"));

function paraFunktion(enParameter) {
    return "Argumentet är: " + enParameter;
}

// Funktion som returnerar flera värden med en array
console.log(fleraVarden());
function fleraVarden() {
    let treVarden = ["Värde 1","Värde 2","Värde 3"];
    return treVarden;
}

// En anonym funktion skapas och anropas så här
let anonymFunktion = function() {
    console.log("Det här är en anonym funktion");
}
anonymFunktion();

// Objekt med två egenskaper som skapas med objektliteral
let literalObjekt = {
    fornamn: "Andreas",
    efternamn: "Åkerlöf"
}

// Objekt med två egenskaper som skapas med objektkonstruktor
let konstruktorObjekt = new Object();
konstruktorObjekt.fornamn = "Erika";
konstruktorObjekt.efternamn = "Åkerlöf";

// Objekt med en egenskap, som får en till egenskap, sedan skrivs båda egenskaper ut
let objektEgenskaper = {
    namn: "Andreas"
}
objektEgenskaper.age = 34;
console.log(objektEgenskaper.namn + " är " + objektEgenskaper.age + " år.");

// Objekt med en metod, som får en till metod, sedan anropas båda
let objektMetoder = {
    namn: function() {
        console.log("Andreas Åkerlöf");
    }
}
objektMetoder.age = function() {
    console.log(34);
}
objektMetoder.namn();
objektMetoder.age();