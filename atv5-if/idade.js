function verificar(){


let idade = Number(document.getElementById("inputIdade").value);
let resultado = ""

if(idade < 18){
    resultado = `MENOR DE IDADE !`
}else{
    resultado = `MAIOR   DE IDADE !`
}


document.getElementById("resultado").innerHTML=resultado;


}
