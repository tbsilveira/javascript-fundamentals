const notas = [8, 6.5, 8, 7.5];
let somaDasNotas = 0;

notas.forEach ( nota => {
  somaDasNotas += nota;
} )

let media = somaDasNotas/notas.length;

console.log(`A média das notas é ${media}.`)



//  const numeros = [100, 200, 300, 400, 500, 600]

//  for (let i = 0; i < numeros.length; i++) {
//  console.log(`O índice na lista é ${i} e o valor é ${numeros[i]}.`);
//  }



//  const notas = [10, 6.5, 8, 7.5];
//  let somaDasNotas = 0;

//  for (let i = 0; i < notas.length; i++) {
//    somaDasNotas += notas[i];
//  }

//  let mediaDasNotas = somaDasNotas/notas.length;

//  console.log(`A média das notas é ${mediaDasNotas}.`);