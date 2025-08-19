const prompt = require("prompt-sync")();

let fruta = prompt("Me fale uma fruta :")

if(fruta == 'maca'){
    console.log("Não vendemos maçã !")
}else if ( fruta == 'banana'){
    console.log("Temos banana por R$ 3,00")
}else if(fruta == 'melancia'){
console.log("Melancia está em falta")
}else {
    console.log("Produto indisponível")
}
    