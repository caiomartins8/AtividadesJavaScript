const prompt = require("prompt-sync")();

let fruta = Number(prompt("Me fale uma fruta :"))

if(fruta == 'maça'){
    console.log("Não vendemos maçã !")
}else if ( fruta == 'banana'){
    console.log("Temos banana por R$ 3,00")
}else if(fruta == 'melancia'){
console.log("Melancia está em falta")
}else {
    console.log("Produto indisponível")
}
    
let hora = Number(prompt("Me informe as horas de 0 a 23 :"))

if (hora <= 12) {
    console.log("BOM-DIA !")
} else if (hora < 18 && hora > 12) {
    console.log("BOA-TARDE !")
} else {
    console.log("BOA-NOITE !")
}