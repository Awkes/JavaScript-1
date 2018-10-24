// Arbeta med iterationer

// For-loop

for (let i = 0; i < 10; i++) {  
    console.log(i);                             // 1-9
}

for (let i = 1; i <= 10; i++) { 
    console.log(i);                             // 1-10
}

for (let i = 1; i <= 10; i=i+2) { 
    console.log(i);                             // 1,3,5,7,9
}

for (let i=1; i<=10; i++) {
    if (i%3 === 0) {
        console.log(i + ' är delbart med 3');   // 3 är delbart med 3, 6 är delbart med 3, 9 är delbart med 3
    }
}

// Skriva ut på en rad
let str  = '';
for (let i = 1; i <= 10; i=i+2){
    str += i + (i<9 ? ', ' : '');   // ternary tar bort sista ,
}
console.log(str);


// Övning 1
console.log('');
for (let i=2; i<=20; i=i+2) {
    console.log(i);
}

// Övning 2
console.log('');
for (let i = 5; i<=100; i=i+5) {
    console.log(i);
}