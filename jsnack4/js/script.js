// Dichiaro le variabili che utilizzerò nel ciclo for con il valore iniziale
let oddNumbers = [];
// Imposto il ciclo for e pusho nell'array i numeri dispari con l'if statement
for (let i = 0; i < 6; i++) {
  userNumber = prompt("number");
  let number = parseInt(userNumber);
  if (number % 2 !== 0) {
    oddNumbers.push(number);
  }
}
console.log(oddNumbers);
