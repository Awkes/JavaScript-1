// Stor bokstav på första tecknet i en sträng

function capitalize_v1(msg) {
    first = msg.charAt(0).toUpperCase();
    rest = msg.substring(1);
    return first+rest;
}
let helloMsg = "hej hej, hemskt mycket hej!";
console.log(capitalize_v1(helloMsg));

function capitalize_v2(msg) {
    return msg.charAt(0).toUpperCase() + msg.substring(1);
}
console.log(capitalize_v2(helloMsg));

// Funktion som skriver ut högsta värdet i en array
// ... = spread operator (tar bort [] från en array)
function maxArray(arr) {
    return Math.max(...arr);
}

console.log(maxArray([1,2,3,4,5,100,42,543,2652,653,91290,532,581,2134,23,244,9587])); // 91290
console.log(maxArray([1,3,6,12])); // 12
