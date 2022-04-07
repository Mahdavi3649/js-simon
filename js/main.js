/* Simon Says
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
- div nell'html
- document.querySelector() | getElementById()
- var numbers = array.
- Math.random() | copio da w3s la funzione per i numbero
- while
- if
- array.includes()
- innerHTML
- setTimeout(funzione, 3000)
- for
- prompt
- parseInt | Number
- operatore logico
*/


// Visualizzare in pagina 5 numeri casuali.
// 1. seleziono elemento della dom dove inserire numeri casuali
const numberElement = document.querySelector('.numbers')

/**
 * Generates and array of numbers
 * @param {number} total_numbers the total number in the array
 * @param {number} numbers_limit the limit of random numbers to generate
 * @returns 
 */
function generateNumbers(total_numbers, numbers_limit) {
  // 2. creare variabile dove salvare i numeri.
  const randomNumbers = []
  // 3. generare 5 numeri casuali (che non si ripetono)

  while (randomNumbers.length !== total_numbers) {
    const number = Math.floor(Math.random() * numbers_limit)
    if (!randomNumbers.includes(number)) {
      randomNumbers.push(number)
    }
  }
  return randomNumbers;
}

const randomNumbers = generateNumbers(5, 100)
console.log(randomNumbers);

numberElement.innerHTML = `Memorizza questi numeri: ${randomNumbers}`

//faccio partire un timer di 30 secondi.
// 1. imposto il set timeout a 30s

setTimeout(timer, 3000, numberElement, randomNumbers)

/**
 * Timer
 * @param {object} dom_element The dom element
 * @param {array} numbers_list A list o f numbers
 */
function timer(dom_element, numbers_list) {
  console.log(dom_element, numbers_list);
  // Rinuovere dalla dom i numeri mostrati
  dom_element.innerHTML = '' // <-- presa dall'ambito globale (considera di usare un parametro)
  // l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
  // 2. faccio un ciclo e chiedo all'utente di inserire un numero di quelli visti.
  const user_attempts = []
  for (let i = 0; i < 5; i++) {
    const user_number = Number(prompt('Inserisci uno dei numeri che ha i visto prima'))
    console.log(user_number);
    /* Random Numbers presa dall'ambito globale (considera una parametro) */
    if (numbers_list.includes(user_number) && !user_attempts.includes(user_number)) {
      user_attempts.push(user_number)
    }
  }
  console.log(user_attempts);


  /* Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 
  - array che contiene i numeri inseriti dall'utente (solo se combaciano con i numeri mostro). 
  - operatore logico
  */
  alert(`Hai indovinato ${user_attempts.length}/${randomNumbers.length
    } - I numeri indovinati sono ${user_attempts}`)

}