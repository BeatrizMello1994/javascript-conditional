let prompt = require('prompt-sync')();

// Faça um programa que receba 4 notas de um aluno, calcule e
// imprima a média aritmética das notas e a mensagem de APROVADO
// para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre
// 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let name = prompt('Informe seu nome:')
let primeiraNota = prompt('Digite sua primeira nota:')
let segundaNota = prompt('Digite sua segunda nota:')
let terceiraNota = prompt('Digite sua terceira nota:')
let quartaNota = prompt('Digite sua quarta nota:')

let  media = (parseFloat (primeiraNota) + parseFloat(segundaNota) + parseFloat(terceiraNota) + parseFloat(quartaNota))/ 4

console.log(`${name}, sua média é: ${media}`)

if(media >=7) {
    console.log("voce foi APROVADO!")
} else if(media<5) {
    console.log("voce foi Reprovado, Besta!!")
} else if(media >=5 && media <=7) {
    console.log("voce está de recuperaçao")
}
