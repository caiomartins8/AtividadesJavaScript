function verificar() {
  const produto = +document.getElementById("inputProduto").value;
  const desconto = +document.getElementById("inputDesconto").value;
  const quantidade = +document.getElementById("inputQuantidade").value;

  const precoFinal = produto * (1 - desconto);
  const totalCompra = precoFinal * quantidade;

  const resultado = `
    ${desconto > 0.5 ? "O desconto é maior que 50%! <br>" : "O desconto é menor que 50%! <br>"}
    ${(totalCompra > 100 && totalCompra < 500) 
        ? `O valor está sim entre R$100 e R$500 : ${totalCompra} <br>` 
        : `O valor não está entre R$100 e R$500 : ${totalCompra} <br>`}
    ${desconto >= 0.3 ? "Compra com desconto especial <br>" : "Compra com desconto normal <br>"}
    O valor do desconto é: ${desconto} <br> 
    O preço de cada unidade é: ${precoFinal} <br> 
    O valor da compra é de: ${totalCompra}
  `;

  document.getElementById("resultado").innerHTML = resultado;
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
