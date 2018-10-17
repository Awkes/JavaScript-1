// Visa aktuellt datum i formatet YYYY-MM-DD
const DATUM = new Date();
let year = DATUM.getFullYear();
let month = (DATUM.getMonth() + 1);
let date = DATUM.getDate();
console.log(year+'-'+month+'-'+date);