let prompt = require('prompt-sync')();

// Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.

let soma = 0
let i = 0

while (i <= 100) {
    soma = soma + i
    i++
    console.log(soma);
}
