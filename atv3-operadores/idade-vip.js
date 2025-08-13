let idade = 10 ;
let convite = false ;


if(idade >= 18){
console.log("A idade é maior que 18 anos ")
}else{
console.log("A idade é menor que 18 anos ")
}


let entrada = (idade >= 18 || convite == true)?"Entrada permitida":"Entrada negada"
console.log(entrada)



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