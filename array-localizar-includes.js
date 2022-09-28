const nomeAlunos = ['John', 'Peter', 'Kevin'];
const mediaAlunos = [10, 9.5, 6];

let listaNomesEMedias = [nomeAlunos, mediaAlunos];

const exibeNomeMedia = (nomeDoAluno) => {
  if (listaNomesEMedias[0].includes(nomeDoAluno)) {
    let indice = listaNomesEMedias[0].indexOf(nomeDoAluno)
    return `${listaNomesEMedias[0][indice]}, sua média é ${listaNomesEMedias[1][indice]}.`;
  } else {
    return `Aluno "${nomeDoAluno}" não localizado.`;
  }
}

console.log(exibeNomeMedia("Peter"));


// *** metodo INCLUDES busca o valor do parâmetro dentro do array.***
//     INCLUDES retorna boolean (true ou false)  

// *** metodo INDEXOF busca o índice referente ao parâmetro informado.***
//     retorna um número(índice do array)