let prompt = require('prompt-sync')();

// Faça um programa receba dois valores e imprima qual é o maior
// número digitado.

let name = prompt('Informe seu nome:')
let primeiro  = parseInt (prompt(" Digite o  primeiro numero: "))
let segundo= parseInt (prompt(" Digite o  segundo numero: "))

 if(primeiro > segundo ) {
    console.log("o primeiro numero é: maior ")
 } else{
    console.log("o segundo numero é: maior")
 }