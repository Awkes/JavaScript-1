// Skapar en array som innehåller flera drinkrecept, som skapas med objektkonstruktorn Recept.

let drinkar = [];

function Recept(titel,utforande,ingredienser) {
    this.titel = titel;
    this.utforande = utforande;
    this.ingredienser = ingredienser;
}

r1 = new Recept("Bloody Mary","Blanda alla ingredienser och skaka i en shaker",["6cl vodka","2dl tomatjuice","Några stänk worcestershire-sås och tabasco"]);
r2 = new Recept("Margarita","Fukta glasets kant med en limeskiva, rull kanten i salt. Blanda resterande ingredienser i en shaker och häll sedan upp i glaset, toppa med limeskivan",["2cl tequila","2cl cointrau","4cl limejuice","Några stänk sockerlag","En limeskiva","Salt"]);

drinkar.push(r1,r2);

console.log(drinkar);