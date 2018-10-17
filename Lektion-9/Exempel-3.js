// Arbeta med datum och tid, Date()

// Skapa en instans av objektet Date
let today = new Date();
console.log(today);
console.log(today.getFullYear()); // YYYY
console.log(today.getMonth()); // M (0 - 11)
console.log(today.getDay()); // D (0 = sun, 1 = mon, 2 = tue) (0 - 6)
console.log(today.getDate()); // Dagens datum (1-31)

console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());

console.log(today.toDateString()); // Ex: Wed Oct 17 2018
console.log(today.toTimeString()); // Ex: 14:32:33 GMT+0200 (Västeuropa, sommartid)