function verificar(){
   
    
const pi = 3.14 ;
let raio = document.getElementById("inputRaio").value;
let resultado = ""

let area = pi * (raio * raio) ; 

resultado = `A área da esfera é de ${area}` ;

document.getElementById("resultado").innerHTML= resultado;

}
