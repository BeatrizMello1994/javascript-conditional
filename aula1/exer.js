let prompt = require('prompt-sync')();

let name = prompt('Informe seu nome:')
let cargo = prompt('Informe seu cargo:')
let salario = parseInt(prompt('Informe seu salario:'))




if ( salario <1000) { 
     salario = salario + salario * 0.1
}
console.log("o salario é de: " + salario)
console.log("o cargo é de: " + cargo)
console.log("o nome é : " + name)

