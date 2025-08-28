function verificar() {
  let num1 = Number(document.getElementById("inputNumeroUm").value);
  let num2 = Number(document.getElementById("inputNumeroDois").value);

  let soma = num1 + num2;
  let subtracao = num1 - num2;
  let multiplicacao = num1 * num2;
  let divisao = num1 / num2;
  let resto = num1 % num2;

  let resultado = `-------- RESULTADOS -------- <br>
  Soma: ${soma} <br> 
  Subtração: ${subtracao} <br> 
  Multiplicação: ${multiplicacao} <br> 
  Divisão: ${divisao} <br> 
  Resto: ${resto} <br><br>`;

  let resultadoDois = (num1 == num2) 
    ? "Os números são iguais <br>" 
    : "Os números são diferentes <br>";

  let resultadoTres = (num1 > num2) 
    ? `O número 1: ${num1} é maior que o número 2: ${num2} <br>` 
    : `O número 2: ${num2} é maior que o número 1: ${num1} <br>`;

  let resultadoQuatro = (num1 > 10 && num2 > 10) 
    ? "Ambos são maiores que 10 <br>" 
    : "Pelo menos um deles é maior que 10 <br>";

  let resultadoCinco = (num1 == num2) 
    ? "Os números são iguais <br>" 
    : "Os números são diferentes <br>";

  document.getElementById("resultado").innerHTML = 
    resultado + resultadoDois + resultadoTres + resultadoQuatro + resultadoCinco;
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