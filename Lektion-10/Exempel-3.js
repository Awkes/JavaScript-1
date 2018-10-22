// Truthy & Falsy
// Följande värden är alltid falska i JS
// 0
// null
// NaN
// false
// ''
// ""
// undefined


if(false || 0 || null || NaN || '' || "" || undefined) // false
    console.log("Vi kommer aldrig hit");

let test = '';
if (test === '') // true
    console.log("detta går");

let andreas;
if(andreas) // false
    console.log("Detta går inte att nå");
else
    console.log("Dra åt helvete, Andreas");

if ([]) // true
    console.log("Vi har en tom array");

if ({}) // true
    console.log("Tomt objekt");

if ('0') // true
    console.log("En nolla")

if ('false') // true
    console.log("En sträng med värdet false")

if (!NaN) // true
    console.log("Inte inte ett nummer är true")