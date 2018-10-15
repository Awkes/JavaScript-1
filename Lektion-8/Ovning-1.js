// Skapar en array som innehåller 3 av mina kurser som objekt.

let kurser = [];

function Kurs(kursnamn,larare,poang,betyg,avklarad) {
    this.kursnamn = kursnamn;
    this.larare = larare;
    this.poang = poang;
    this.betyg = betyg;
    this.avklarad = avklarad;
}

let frontendIntro = new Kurs("Frontend-utveckling, introduktion och projektmetodik","Per Söderberg",20,"VG",true);
let javascript1 = new Kurs("JavaScript 1","Mahmud Al Hakim",35,null,false);
let htmlCss = new Kurs("HTML och CSS","Mahmud Al Hakim",35,null,true);

kurser.push(frontendIntro,javascript1,htmlCss);

console.log(kurser);