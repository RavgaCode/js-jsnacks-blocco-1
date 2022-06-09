// Creo l'array di numeri
const numbers = [1, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47];
// Dichiaro le variabili che prendono i due div
let red = document.getElementById("red");
let green = document.getElementById("green");
// Imposto il ciclo for per ciclare l'array
for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  // Imposto l'if statement per determinare se il numero è pari o dispari e stampo
  if (num % 2 === 0) {
    green.innerHTML += `${num} `;
  } else {
    red.innerHTML += `${num} `;
  }
}
