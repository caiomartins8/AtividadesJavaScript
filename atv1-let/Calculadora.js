function verificar() {


    let peso = document.getElementById("inputPeso").value ;
let altura = document.getElementById("inputAltura").value ;
let resultado = "";

let imc = peso / (altura * altura);

if (imc < 18.5) {
    resultado ="Abaixo do peso"
}
else if (imc >= 18.5 && imc <= 24.9) {
    resultado= "Peso normal"
}
else if (imc >= 25 && imc <= 29.9) {
    resultado= "Sobre Peso"
}
else {
    resultado = "Obesidade"

}

    document.getElementById("resultado").innerText = resultado;

}