
let prompt = require('prompt-sync')();

let numero = parseInt(prompt("digite o numero que deseja ver a tabuada: "))

for (let contador = 1; contador <= 10; contador++) {
    console.log(`${numero} x ${contador} = ${numero* contador}`);
    
}




