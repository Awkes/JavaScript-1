// Visar klockan i format HH:nn:ss
const KLOCKA = new Date();
console.log(KLOCKA.toTimeString().slice(0,8));