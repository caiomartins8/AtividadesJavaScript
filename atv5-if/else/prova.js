const prompt = require("prompt-sync")(); 

let nota =  Number(prompt(" Me fale uma nota de 0 a 10 : "))

if(nota >= 7){
    console.log("Aprovado")
}else{
    console.log("Reprovado")
}

