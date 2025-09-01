function verificar(){


    let hora = Number(document.getElementById("inputHoras").value)
let resultado = ""


if (hora <= 12) {
    resultado = `BOM DIA !`
} else if (hora < 18 && hora > 12) {
    resultado = `BOA TARDE  !`
} else {
    resultado = `BOA NOITE !`
}

document.getElementById("resultado").innerHTML = resultado ;
}
