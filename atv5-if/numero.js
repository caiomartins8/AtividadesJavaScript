function verificar() {


let numero = Number(document.getElementById("inputNumeros").value)
let resultado = ""

if(numero >= 1 ){
    resultado = `Seu número é positivo`
} else if ( numero === 0){
    resultado = `Seu número é zero`
}else{
    resultado = `Seu número é negativo`
}

document.getElementById("resultado").innerHTML = resultado ;


}
