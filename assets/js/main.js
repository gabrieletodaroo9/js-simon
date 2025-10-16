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
console.log(generatedNumber);

casualNumberEl.innerText = generatedNumber

// Fare partire il timer che fara scomparire i numeri dopo 30 secondi(setTimeout)
//  e fare apparire gli input
const clock = setTimeout(function () {
    casualNumberEl.classList.add("d-none")
    divFormEl.classList.remove("d-none")
    divFormEl.classList.add("d-block")
}, 10000)
// Creo una funzione da collegare all'evento dell'invio del form
formEl.addEventListener("submit",function(event){
event.preventDefault()
//Aggiungere variabili per salvare gli input 
const input1 = document.getElementById("input-1")
const input2 = document.getElementById("input-2")
const input3 = document.getElementById("input-3")
const input4 = document.getElementById("input-4")
const input5 = document.getElementById("input-5")
// console.log(input1);
// e Prendere i dati forniti dai 5 input salvandoli in un array e convertendoli in numeri 

const userNumb = [Number(input1.value),Number(input2.value),Number(input3.value),Number(input4.value),Number(input5.value)]
console.log(userNumb);

// Creo una variabile per i numeri indovinati e una per il punteggio

let correctNumb = []
let counter = 0

// ciclo dentro  ai numeri mandati dall'input

for ( i = 0; i < userNumb.length; i++ ) {
    // SE nei numeri generati c'è uno dei numeri che ho scritto
    if( generatedNumber.includes(userNumb[i])){
        // -aumento il punteggio
        counter++
        // -aggiungo il numero alla variabile dei numeri indovinati
        correctNumb.push(userNumb[i])
    }

}
console.log(correctNumb);
console.log(counter);


// Stampo nella DOM il risultato in un messaggio con interpolati il punteggio e i numeri indovinati
const result = document.getElementById("result") 

result.innerText = `Hai indovinato ${counter} numeri e sono: ${correctNumb}, i numeri corretti erano ${generatedNumber} e tu hai scritto ${userNumb}`

}

)

