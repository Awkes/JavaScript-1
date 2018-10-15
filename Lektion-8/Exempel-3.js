/ Arbeta med JavaScripts globala objekt

// Varning, problem med var
// Om du deklarerar variabler som råkar ha samma namn som objektets egenskaper
// då skapas nya variabler som istället anropas.
// Lösning: använd let istället.
var innerWidth = 100;
var innerHeight = 200;

function demo() {
    console.log(this.innerWidth);
    console.log(this.innerHeight);
    // this pekar på ett objekt som heter window i webbläsaren, inte i node.
}
// demo();


// Två bra metoder i objektet Window.

            