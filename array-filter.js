const nomes = ['John', 'Mary', 'Mark', 'Eric'];
const notas = [7.8, 4.9, 8.2, 6];
const notaMinima = 8;

let reprovados = nomes.filter( ( _ , i) => notas[i] < notaMinima);

console.log(`Alunos reprovados: ${reprovados}.`);