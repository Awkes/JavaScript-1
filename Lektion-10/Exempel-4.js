// Switch-satsen

function getDay() {

    let day;

    switch (new Date().getDay()) {
        case 0  :   day = "Söndag"; break;
        case 1  :   day = "Måndag"; break;
        case 2  :   day = "Tisdag"; break;
        case 3  :   day = "Onsdag"; break;
        case 4  :   day = "Torsdag"; break;
        case 5  :   day = "Fredag"; break;
        case 6  :   day = "Lördag"; break;
    }

    return day;
}

console.log('Det är '+getDay().toLowerCase()+' idag!');