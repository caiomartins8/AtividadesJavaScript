function verificar(){


let produto = Number(document.getElementById("inputProduto").value);
let desconto = Number(document.getElementById("inputDesconto").value);
let quantidade = Number(document.getElementById("inputQuantidade").value);
let resultado = "" ;
let  resultadoDois = ""

let valorDesconto = produto * desconto;

let precoFinal = produto - valorDesconto;

let totalCompra = precoFinal * quantidade;



if (desconto > 0.5) {
    resultado = "O desconto é maior que 50%! ,br>" ;
} else {
    resultado = "O desconto é menor que 50%! <br>" ;
}


if (totalCompra > 100 && totalCompra < 500) {
    resultadoDois = `O valor está sim entre R$100 e R$500 : ${totalCompra} <br>`
} else {
    resultadoDois = `O valor não está entre R$100 e R$500 : ${totalCompra} <br>`

}


let resultadoTres = (desconto >= 0.3) ? 'Compra com desconto especial <br>' : 'Compra com desconto normal <br>';


let resultadoQuatro = ` O valor do desconto é : ${desconto} <br> O preço de cada unidade é : ${precoFinal} <br> O valor da compra é de : ${totalCompra}`

document.getElementById("resultado").innerHTML = resultado + resultadoDois + resultadoTres + resultadoQuatro
}


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
