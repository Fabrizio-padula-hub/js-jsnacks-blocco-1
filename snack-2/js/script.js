// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

const listNumber = [];

// chiedere all'utente 5 numeri
for (let i = 0; i < 5; i++){

    const userNumber = parseInt(prompt('Scrivi il tuo numero'));
    console.log('numero utente', userNumber)

    // aggiungere i numeri in un recipiente
    listNumber.push(userNumber);
    console.log(listNumber)

}

// sommare tutti i numeri dell'utente
// stampare la somma di tutti i numeri