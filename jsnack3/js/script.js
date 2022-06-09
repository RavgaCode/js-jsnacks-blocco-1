// Dichiaro le variabili che utilizzerò nel ciclo for con il valore iniziale
let userNumber = null;
let sum = 0;
// Imposto il ciclo for e sommo i valori ottenuti
for (let i = 0; i < 10; i++) {
  userNumber = prompt("number");
  let number = parseInt(userNumber);
  sum += number;
}
// Stampo la somma finale
console.log(sum);
