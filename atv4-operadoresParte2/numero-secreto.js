const prompt = require("prompt-sync")(); 

const numeroSecreto = 7;
let numero = Number(prompt("Digite um número: "));

let resultado = (numero === numeroSecreto) ? "Acertou!" : "Errou, tente novamente!";
console.log(resultado);
