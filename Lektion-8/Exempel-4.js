// Några användbara metoder i objektet Window
// ------------------------------------------


// 1. prompt (inmatningsfält) och alert (popup-ruta)

let person = prompt("Vad heter du?");
// alert("Hej " + person);


// 2. setTimeout - Kör en funktion efter X antal millisekunder, 3000 ms = 3 sek

function helloPopup() {
    alert("Tjenare " + person);
}

setTimeout(helloPopup,3000);


// 3. setIntervall - Kör en funktion flera gånger med intervallet X millisekunder.

setInterval(function(){console.log("Hej " + person)},1000);
