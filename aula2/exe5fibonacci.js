// let prompt = require('prompt-sync')();
// import { PromptSync } from "prompt-sync";
// const prompt = PromptSync()

// Imprimir os primeiros 10 números da sequência de Fibonacci.

export function fibonacci() {
    let numeroAnterior = 0;
    let numeroAtual = 1
    
    console.log(numeroAnterior);
    
    console.log(numeroAtual);
    
    for (let contador = 0; contador < 20; contador++) {
        let proximoNumero = numeroAnterior + numeroAtual;
    
        console.log(proximoNumero);
    
        numeroAnterior = numeroAtual;
        numeroAtual = proximoNumero;
    
    
    }    
}
