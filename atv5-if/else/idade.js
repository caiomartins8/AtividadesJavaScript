const prompt = require("prompt-sync")(); 

let idade = Number(prompt("Digite sua idade : "));


if(idade < 18){
    console.log("menor de idade")
}else{
    console.log("maior de idade")
}