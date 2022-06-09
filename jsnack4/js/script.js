// Dichiaro le variabili che utilizzerò nel ciclo for con il valore iniziale
let userNumber = null;
let oddNumbers = [];
// Imposto il ciclo for e pusho nell'array i numeri dispari con l'if statement
for (let i = 0; i < 3; i++) {
  userNumber = prompt("number");
  let number = parseInt(userNumber);
  if (number % 2 !== 0) {
    oddNumbers.push(number);
  }
}
console.log(oddNumbers);
