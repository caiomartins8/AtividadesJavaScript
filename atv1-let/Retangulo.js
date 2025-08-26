function calcular(){
let altura = document.getElementById("inputAltura").value;
let base = document.getElementById("inputBase").value;
let resultado = "";

area = altura*base;

resultado = `A área total é :${area} cm2` ;

document.getElementById("resultado").innerText= resultado ;
    
}


