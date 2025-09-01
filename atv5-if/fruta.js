function verificar(){

let fruta = document.getElementById("inputFruta").value
let resultado = ""


if(fruta == 'maca'){
    resultado = `Não vendemos maçã !`
}else if ( fruta == 'banana'){
    resultado = `Temos banana por R$ 3,00`
}else if(fruta == 'melancia'){
resultado = `Melancia está em falta`
}else {
   resultado = `Produto indisponível`
}

document.getElementById("resultado").innerHTML=resultado;
  
}  