import PromptSync from "prompt-sync";

 
// import { fibonacci } from "./ex5.js";
// import { pares20 } from "./ex6.js";
// import { soma } from "./ex7.js";
// import { maioridade } from "./ex8.js";

import { umAdez, tabuada, fibonacci, pares20, soma, maioridade} from "./funcoes.js";


const prompt = PromptSync();

let exe;
let continuar;






do {
    exe = parseInt(prompt("Digite um número que represente um exercício de 1 a 10: "));
    

    switch (exe) {
        case 1:
            umAdez();
            break;

        case 2:
            tabuada();
            break;

        case 3:
            fibonacci();
            break;

        case 4:
            pares20();
            break;

        case 5:
            soma();
            break;

        case 6:
            maioridade();
            break;

        default:
            console.log("Digite uma opção valida!");
            break;
    }

    continuar = prompt("Deseja Continuar ver outros exercícios? Digite (S) para sim e (N) para não: ")

} while (continuar.toLocaleUpperCase() === "S");