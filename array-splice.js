const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];


// 1= índice que inicia a ação | 2= qtde de items removidos | 3= item a ser inserido no array (opcional)
//                       1  2      3 
// listaDeChamada.splice(1, 2, 'Rodrigo');


listaDeChamada.splice(1, 2, 'Rodrigo');

console.log(`Lista de chamada: ${listaDeChamada}.`);