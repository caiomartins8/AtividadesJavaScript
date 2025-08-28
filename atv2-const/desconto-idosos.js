function verificar(){


const desconto = 0.5 ;
const idadeIdoso = 60;
let idade = document.getElementById("inputIdade").value ;
let ingresso = 40 ;
let resultado = ""

if(idade >= idadeIdoso){

descontoIngresso = ingresso * desconto;
ingressoFinal = ingresso - descontoIngresso ;

resultado = `Opa ! Velhinho tem desconto , o ingresso sairá a : R$ , ${ingressoFinal}`;

}else {
resultado = `Aaahh ... você não tem desconto , o total é : R$  , ${ingresso}`;

}

document.getElementById("resultado").innerHTML=resultado;

}

