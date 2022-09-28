// ***
// Calcular a média de notas de cada sala com REDUCE.

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaDaSala(notasDaSala) {
  let somaDasNotas = notasDaSala.reduce((acumulador, atual) => 
  acumulador + atual , 0);
  return somaDasNotas/notasDaSala.length;
}

console.log(`A média das notas de JavaScript é ${mediaDaSala(salaJS)}.`);
console.log(`A média das notas de Java é ${mediaDaSala(salaJava)}.`);
console.log(`A média das notas de Python é ${mediaDaSala(salaPython)}.`);



// ***
console.log("--------------")
// ***
// Calcular a média de notas com REDUCE.

const notas = [10, 6.5, 8, 7]
let media = notas.reduce((acum, atual) => acum + atual , 0) / notas.length;
console.log(`A média das notas é ${media}.`);
