/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 

-- document.querySelector() | getElementById()
--div nell html
var number = array
--Math.random() | copie da w3s
-- ?
--while
--if
--array.includes

-innerHTML
--setTimeout(funzione,3000)
--for
--prompt
--parsInt
--operatore logico
*/


// Visualizzare in pagina 5 numeri casuali

// 1.seleziono elemento della dome dove dpve inserire numeri casuali
const numberElement = document.querySelector(".numbers")
// 2.creare variabile dove inserure i numeri
const randomNumbers = []
//3.generare 5 numeri casuali (che non si ripetono)
while (randomNumbers.length !== 5){
    const number = Math.floor(Math.random() * 100)
    if(randomNumbers.includes(number)){
        randomNumbers.push(number)
    }
}

console.log(randomNumbers);
numberElement.innerHTML = `Memorizza questi numeri: ${randomNumbers}`

//faccio partire un timer di 30 secondi.
//1.imposto il set timeout a 30s


setTimeout(() => {
    //Rimouvere della dom i numeri mostrati
    numberElement.innerHTML = ""
    //Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    //2. faccio un ciclo e chiedo all utente inserire un numero
    const user_attempts = []
    for (let i = 0; i < 5; i++) {
        const user_number = Number(prompt("inserisci uno dei numeri che ha i visto prima"))
        console.log(user_number);
        if(randomNumbers.includes(user_number) && !user_attempts.includes(user_number)){
            user_attempts.push(user_number)
        }
    }
    console.log(user_attempts);
    

/*     Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 
   --array cje contine i nuemri inseriti dall utente (solo se combaciano con i numeri mostro). ?
   --operatore logico
 */
alert(`Hai indovinato ${user_attempts.length}/${randomNumbers.length} - I numeri indovinati sono ${user_attempts}` )

},3000)




