let peso = 50 ;
let altura = 1.80;
let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Abaixo do peso")
}
else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal")
}
else if (imc >= 25 && imc <= 29.9) {
    console.log("Sobre Peso")
}
else {
    console.log("Obesidade")

}