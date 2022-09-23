function apresentar(nome){
    return `Meu nome é ${nome}.`;
  }
  console.log(apresentar("Johnny"))
  console.log("=========")
  
  //*******************************************************//
  
  
  //    ARROW function
  
                        //param   //retorno da funcao
  const apresentarArrow = nome => `Meu nome é ${nome}.`;
  console.log(apresentarArrow("Johnny"))
  console.log("=========")
  
  //*******************************************************//
  
  
               //param         //retorno da funcao
  const soma = (num1, num2) => num1 + num2;
  console.log(`O resultado da soma é ${soma(25, 15)}.`)
  console.log("=========")
  
  //*******************************************************//
  
  
  //  ARROW function com mais de 1 linha de instrução
  //  nestes casos usa-se as chaves { }
  
  const somaNumPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
      return `Número inválido!`;
    } else {
      return num1 + num2;
    }
  }
  console.log(somaNumPequenos(5, 9))
  console.log("=========")
