function verificar(){

const numeroSecreto = 7;
let numero = Number(document.getElementById("inputNumsecreto").value);
let resultado = ""


if(numero === numeroSecreto){
    resultado = "PARABÉNS VOCÊ ACERTOU O NÚMERO SECRETO"
}else{
    resultado = "AAAHHH ... VOCÊ ERROU ! TENTE NOVAMENTE"

}

document.getElementById("resultado").innerHTML = resultado ;


}


