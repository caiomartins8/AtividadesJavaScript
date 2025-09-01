function verificar(){

let nota =  Number(document.getElementById("inputNotas").value)
let resultado = ""

if(nota >= 7){
resultado = `Aprovado`
}else{
resultado = `Reprovado`
}

document.getElementById("resultado").innerHTML = resultado ;

}

