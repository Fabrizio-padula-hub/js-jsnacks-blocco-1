// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.


// creare array vuoto
const listNumber = [];

// chiedere all'utente di scrivere 6 numeri diversi
for (let i = 0; i < 6; i++){
    console.log(i)

    const numberUser = parseInt(prompt('Scrivi i tuoi numeri'));
    console.log('numeri utente', numberUser)
}

// prendere i numeri dell'utente e vedere se sono pari o dispari
// se i numeri sono dispari inserirli nell'array