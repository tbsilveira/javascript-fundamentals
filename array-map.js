// // *****
// // Multiplicar os valores do array por 10.

// const arrayNums = [0, 2, 4, 6, 8]

// function multiplicaPorDez (num) {
//   return num * 10
// }

// const arrayMultiplicada = arrayNums.map(multiplicaPorDez)

// console.log(arrayMultiplicada)


// // *****

// const arrayNumeros = [0, 1, 2, 3, 4]

// let arrayNumMultiplicado = arrayNumeros.map( num => num * 10)

// console.log(arrayNumMultiplicado)


//*****
// adicionar 1 ponto a cada nota. Nota máxima é 10.

const notas = [10, 9, 8, 7, 6]
const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota);
console.log(notasAtualizadas)



// *****
// padronizar os nomes dos alunos para letras maiusculas

const nomes =['ana Julia', 'Caio vinicius', 'BIA silva']
const nomesMaiusculo = nomes.map( nome => nome.toUpperCase())
console.log(nomesMaiusculo)