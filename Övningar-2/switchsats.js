/*
    Skapa en array över 7 olika aktiviteter som du tycker om.
    Visa via en switch-sats olika meddelanden beroende på
    aktuell dag t.ex. 
        Det är söndag idag och du ska ringa din mormor!
        Det är måndag idag och du ska öva lite JavaScript!
*/

let toDoList = [
    'Det är söndag idag och du ska vara bakfull eller gejma hela dagen!',
    'Det är måndag idag och du behöver dricka skitmycket kaffe!',
    'Det är tisdag idag och du är tröttare än på måndagen!',
    'Det är onsdag idag och äntligen börjar du komma i fas med att arbetsveckan startat!',
    'Det är torsdag idag och du ser fram emot helgen!',
    'Det är fredag idag och du ska antingen festa eller börja gejma!',
    'Det är lördag idag och du ska festa eller gejma hela dagen!'
];

switch (new Date().getDay()) {
    case 0 : console.log(toDoList[0]); break;
    case 1 : console.log(toDoList[1]); break;
    case 2 : console.log(toDoList[2]); break;
    case 3 : console.log(toDoList[3]); break;
    case 4 : console.log(toDoList[4]); break;
    case 5 : console.log(toDoList[5]); break;
    case 6 : console.log(toDoList[6]); break;
}