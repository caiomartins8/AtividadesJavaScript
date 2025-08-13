let num1 = 33;
let num2 = 33;

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let resto = num1 % num2;

console.log("Soma: ", soma);
console.log("Subtração: ", subtracao);
console.log("Multiplicação: ", multiplicacao);
console.log("Divisão: ", divisao);
console.log("Resto: ", resto);

if (num1 == num2) {
  console.log("Os numeros são iguais ");

} else {
  console.log("Os numeros são diferentes ");

}

if (num1 > num2) {
  console.log("O num1 :", num1, " é maior e o num2 :", num2, " é menor");

} else {
  console.log("O num2 :", num2, "é maior e o num1 :", num1, "é menor");

}

if (num1 > 10 && num2 > 10) {
  console.log("Ambos são maiores que 10.");
} else {
  console.log("Pelo menos um deles não é maior que 10.");
}


let resultado = (num1 == num2) ? 'Os números são iguais' : 'Os números são diferentes';
console.log(resultado);


// COLINHA DE OPERADORES

// 1. OPERADORES DE COMPARAÇÃO
// Servem para comparar valores ou tipos.
// Exemplos: ==, ===, !=, !==, >, <, >=, <=
// Retornam true ou false dependendo da comparação.

// 2. OPERADORES LÓGICOS
// Servem para combinar ou inverter condições.
// Exemplos: && (E), || (OU), ! (NÃO)
// Também retornam true ou false.

// 3. OPERADOR TERNÁRIO
// Serve para escrever uma condicional de forma resumida.
// Sintaxe: condição ? valorSeVerdadeiro : valorSeFalso
// Retorna um valor dependendo se a condição é true ou false.