function verificar() {
  const num1 = +document.getElementById("inputNumeroUm").value;
  const num2 = +document.getElementById("inputNumeroDois").value;

  const resultado = `
    -------- RESULTADOS -------- <br>
    Soma: ${num1 + num2} <br> 
    Subtração: ${num1 - num2} <br> 
    Multiplicação: ${num1 * num2} <br> 
    Divisão: ${num1 / num2} <br> 
    Resto: ${num1 % num2} <br><br>
    ${num1 == num2 ? "Os números são iguais <br>" : "Os números são diferentes <br>"}
    ${num1 > num2 ? `O número 1: ${num1} é maior que o número 2: ${num2} <br>` 
                  : `O número 2: ${num2} é maior que o número 1: ${num1} <br>`}
    ${(num1 > 10 && num2 > 10) ? "Ambos são maiores que 10 <br>" 
                               : "Pelo menos um deles é maior que 10 <br>"}
    ${num1 == num2 ? "Os números são iguais <br>" : "Os números são diferentes <br>"}
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