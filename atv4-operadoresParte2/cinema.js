function verificar(){


let idade = Number(document.getElementById("inputIdade").value );
let carteirinha = document.getElementById("inputCarteirinha").value ;
let resultado = ""
let resultadoDois = ""


if ( idade < 12 || idade > 60){
resultado ="Pela sua idade , seu ingresso sairá de graça <br>";
}else{
resultado ="Pela sua idade , você deverá pagar a inteira <br>";

}

if (carteirinha == "sim"){
resultadoDois = "Oba! Carteirinha de estudante paga MEIA-ENTRADA <br>" ;
}else if (carteirinha == "não"){
    resultadoDois = "Aaaaah ... Você deve pagar a INTEIRA ! <br>" ;

    }else{
resultadoDois = "INVÁLIDO ! ESCREVA SIM OU NÃO" ;

}


document.getElementById("resultado").innerHTML = resultado + resultadoDois ;
}


