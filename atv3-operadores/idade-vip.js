function verificar() {
  let idade = Number(document.getElementById("inputIdade").value);
  let convite = document.getElementById("inputConvite").value;
  let resultado = "";

  if (idade >= 18) {
    resultado = "A idade é maior ou igual a 18 anos. <br>";
  } else {
    resultado = "A idade é menor que 18 anos. <br>";
  }

  let resultadoDois = (idade >= 18 || convite === "sim") 
    ? "Entrada permitida" 
    : "Entrada negada";

  document.getElementById("resultado").innerHTML = resultado + resultadoDois;
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