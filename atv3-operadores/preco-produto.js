let produto = 200;
let desconto = 0.20;
let quantidade = 3;

let valorDesconto = produto * desconto;

let precoFinal = produto - valorDesconto;

let totalCompra = precoFinal * quantidade;



if (desconto > 0.5) {
    console.log("O desconto é maior que 50%!");
} else {
    console.log("O desconto não é maior que 50%.");
}


if (totalCompra > 100 && totalCompra < 500) {
    console.log("O valor está sim entre R$100 e R$500 :", totalCompra)
} else {
    console.log("O valor não está entre R$100 e R$500 :", totalCompra)

}


let resultado = (desconto >= 0.3) ? 'Compra com desconto especial' : 'Compra com desconto normal';
console.log(resultado);





console.log("O valor do desconto é :", desconto)
console.log("O preço de cada unidade de produto :", precoFinal)
console.log("O valor total da compra é :", totalCompra)





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
