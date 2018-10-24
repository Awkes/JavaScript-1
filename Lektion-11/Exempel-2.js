// Iteration över arrayer

let os = ['Windows', 'MacOS X', 'Linux', 'iOS', 'Android', 'Unix'];

for (let i = 0; i < os.length; i++) {
    console.log(os[i]);
}

console.log('');

// Array med objekt
let data = [
    { name: 'Andreas', email: 'andreas@email.se' },
    { name: 'Erika', email: 'erika@email.se' },
    { name: 'Skalman', email: 'skalman@email.se' },
    { name: 'Kalle', email: 'kalle@email.se' },
    { name: 'Ralf', email: 'ralf@email.se' }
];

// Skriver ut epostadresser från objekten i arrayen
for (let i=0; i<data.length; i++) {
    console.log(data[i].email);
}

console.log('');

// For-in-loop

for (let i in data) {
    console.log(i+' : '+data[i].name)
}

// For-of-loop
for (let obj of data) {
    console.log(obj.name);
}

//

data = [
    {
        name: 'Andreas',
        email: 'andreas@email.se',
        address: {
             street : 'Tomtebodavägen 3a',
             county: 'Solna',
             zipcode: '111 12' 
        }
    },
    {
        name: 'Erika',
        email: 'erika@email.se',
        address: {
            street : 'Tomtebodavägen 3a',
            county: 'Solna',
            zipcode: '111 12' 
       }
    },
    {
        name: 'Skalman',
        email: 'skalman@email.se',
        address: {
            street : 'Tomtebodavägen 3a',
            county: 'Solna',
            zipcode: '111 12' 
       }
    }
];

for (let obj of data) {
    console.log(obj.name +' bor '+ obj.address.street);
}