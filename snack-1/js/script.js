// Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati (inserire il numero nell'array solo se non è già presente).

// aprire l'array
const numberList = [];


// chiedere all'utente i 5 numeri
for (let i = 0; i < 5; i++){
    console.log(numberList)

    const userNumber = parseInt(prompt('Scrivi i tuoi numeri'));
    console.log('numeri utente', userNumber)

    // inserire i numeri nell'array ma
    // se i numeri inseriti sono uguali a quelli nella lista, non inserirli
    if (numberList.includes(userNumber) === false){
        numberList.push(userNumber);

    }

}
console.log(numberList)

    