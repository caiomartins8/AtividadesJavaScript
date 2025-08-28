function verificar(){

    
num1 = Number(document.getElementById("inputNum1").value) ;
num2 = Number(document.getElementById("inputNum2").value) ;
let resultado =""
let resultadoDois =""
let resultadoTres =""



if( num1 > num2){
resultado = `${num1} é maior que ${num2} <br>`
}else if (num1 == num2){
resultado = `${num1} é igual a ${num2} não tem maior <br>`

}else{
resultado = `${num2} é maior que  ${num1} <br> `

}

if( num1 < num2){
    resultadoDois = `${num1} é menor que  ${num1} <br>`

}else if (num1 == num2){
resultadoDois = `${num1} é igual a ${num2} não tem menor <br>`

}
else{
resultadoDois = `${num2} é menor que  ${num1} <br> `

}

if( num1 == num2){
resultadoTres = `${num1}  é igual que ${num2} <br>`
}else{
resultadoTres = `${num1}  é diferente que ${num2} <br>`

}

document.getElementById("resultado").innerHTML = resultado + resultadoDois + resultadoTres

}

