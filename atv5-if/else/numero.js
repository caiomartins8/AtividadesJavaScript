const prompt = require("prompt-sync")(); 

let numero = Number(prompt("Digite um numero , podendo ser positivo , negativo ou zero :"))

if(numero >= 1 ){
    console.log("Seu número é positivo")
} else if ( numero === 0){
console.log("Seu número é Zero")
}else{
    console.log("Seu número é negativo")
}