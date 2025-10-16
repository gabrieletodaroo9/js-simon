// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

// BONUS:
// Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.,
// Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.,

// Aggiungo le variabili che mi servono 

const casualNumberEl = document.getElementById("casual-number")
const formEl = document.getElementById("form")
const divFormEl = document.getElementById("div-form")
let generatedNumber = []

// Aggiungo la funzione dei numeri randomici

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Salvo i 5 numeri dentro una variabile/array

for (let i = 0; i < 5; i++) {
    generatedNumber.push(getRandomInt(1, 100))
}

// Visualizzare in pagina i  5 numeri casuali

casualNumberEl.innerText = generatedNumber

// Fare partire il timer che fara scomparire i numeri dopo 30 secondi(setTimeout)
//  e fare apparire gli input
const clock = setTimeout(function () {
    casualNumberEl.classList.add("d-none")
    divFormEl.classList.remove("d-none")
    divFormEl.classList.add("d-block")
}, 10000)

// Prendere i dati forniti dai 5 input

// Faccio la verifica comparando i numeri

// Creo una funzione per verificare il risultato

// Creo una variabile per i numeri indovinati e una per il punteggio

// ciclo dentro  ai numeri mandati dall'input

// SE nei numeri generati c'è uno dei numeri che ho scritto
// -aumento il punteggio
// -aggiungo il numero alla variabile dei numeri indovinati

// Stampo nella DOM il risultato in un messaggio con interpolati il punteggio e i numeri indovinati