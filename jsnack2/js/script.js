// Chiedo il numero di 4 cifre all'utente e dichiaro la variabile per la somma col valore iniziale
const userNumber = prompt("Digita un numero di 4 cifre");
let sum = 0;
// Imposto il ciclo for
for (let i = 0; i < userNumber.length; i++) {
  let number = parseInt(userNumber[i]);
  sum += number;
}
console.log(sum);
