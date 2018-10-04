console.log("");

// En array med kunder, som vi sedan ska hämta sista posten ur (vi leker att vi inte vet antal poster)
let customers = ["Kurt-Kent","Andreas","Erika","Mahmud","Daniel","Greta","Nalle Puh"];

// Alternativ 1
console.log(customers[customers.length-1]);

// Alternativ 2
let lastCustomer = customers.length-1;
console.log(customers[lastCustomer]);

// Alternativ 3
console.log(customers.slice(-1)[0]);

console.log("");