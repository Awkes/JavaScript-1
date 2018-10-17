// Visar veckodag datum månad år
const DATUM = new Date();
const DAGAR = ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'];
const MANADER = ['Januari','Februari','Mars','April','Maj','Juni','Juli','Augusti','September','Oktober','November','December'];
console.log(DAGAR[DATUM.getDay()] + ' den ' + DATUM.getDate() + ' ' + MANADER[DATUM.getMonth()] + ' ' + DATUM.getFullYear());