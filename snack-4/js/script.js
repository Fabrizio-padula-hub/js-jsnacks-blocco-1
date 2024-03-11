// Calcola la somma e la media dei primi 10 numeri.


// creare un array con 10 numeri
const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numberList)

// sommare tutti e 10 i numeri (1 + 2 + 3 + 4 + 5 + 6.... sono elementi della lista)
let sum = 0;
for (let i = 0; i < numberList.length; i++){
    

    sum = sum + (numberList[i]);
    console.log(sum)
}

// prendere il risultato
// dividerlo per 10