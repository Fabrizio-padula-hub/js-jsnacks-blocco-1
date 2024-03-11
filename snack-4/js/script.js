// Calcola la somma e la media dei primi 10 numeri.


// creare un array con 10 numeri
const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sommare tutti e 10 i numeri (1 + 2 + 3 + 4 + 5 + 6.... sono elementi della lista)
let sum = 0;
for (let i = 0; i < numberList.length; i++){
    
    sum = sum + numberList[i];
    console.log('somma elementi' + sum)
}

// prendere il risultato
// dividerlo per 10
const average = sum / 10;
console.log(`Media ${average}`)

alert(`la somma dei numeri è ${sum}, la media è ${average}`);