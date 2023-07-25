import PromptSync from "prompt-sync";

import { verificarMaiorIdade } from "./exe2.js";

const prompt = PromptSync();

// menu para escolher o exercicio

let exercicio;
let continuar;

do {

    exercicio = parseInt(prompt("digite o numero que representa o exercico de 1 a 4: "));
    switch (exercicio) {
        case 1:
        case 2:
            // // Chamando a função helloworld
            helloworld("Hello World")
            let aluno = {
                nome: "Rebeca",
                idade: 19,
                hardSkills: ["figma", "HTML", "CSS", "web responsive"]
            }

            console.log(aluno.nome,aluno.idade,aluno.hardSkills);
            console.log("objeto aluno", aluno);
            break;

        default:
            console.log("digite o numero de 1 a 4: ");
            break;

    }

    continuar = prompt("Deseja continuar? ver outros exercicios? Digite s para sim e n para não:  ").toLocaleLowerCase();

} while (continuar === "s");

function helloworld(frase) {
    console.log(frase);
}



