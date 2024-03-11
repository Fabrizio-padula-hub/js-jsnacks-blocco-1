// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

const listNumber = [];

// tutti i numeri partono da 0
let sum = 0;

// chiedere all'utente 5 numeri
for (let i = 0; i < 5; i++){
    const userNumber = parseInt(prompt('Scrivi il tuo numero'));

    // aggiungere i numeri in un recipiente
    listNumber.push(userNumber);

    // sommare tutti i numeri dell'utente
    sum += userNumber;
    console.log(sum)

}

 // stampare la somma di tutti i numeri
 alert(`la somma dei tuoi numeri è ${sum}`);
