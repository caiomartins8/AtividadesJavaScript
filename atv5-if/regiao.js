function verificar() {
    let estado = document.getElementById("inputEstado").value.toUpperCase(); 
    let resultado = "";

    if (estado === "RJ" || estado === "MG" || estado === "ES" || estado === "SP") {
        resultado = "VOCÊ É DA REGIÃO SUDESTE!<br>🏖️ Turismo variado – praias famosas (RJ, ES), serras (MG) e centros históricos.";
    } 
    else if (estado === "AC" || estado === "AM" || estado === "AP" || estado === "PA" || estado === "RO" || estado === "RR" || estado === "TO") {
        resultado = "VOCÊ É DA REGIÃO NORTE!<br>🌳 Maior região em território – ocupa quase metade do Brasil.";
    } 
    else if (estado === "AL" || estado === "BA" || estado === "CE" || estado === "MA" || estado === "PB" || estado === "PE" || estado === "PI" || estado === "RN" || estado === "SE") {
        resultado = "VOCÊ É DA REGIÃO NORDESTE!<br>🌞 Clima variado – praias tropicais, sertão semiárido e muita cultura regional.";
    } 
    else if (estado === "DF" || estado === "GO" || estado === "MT" || estado === "MS") {
        resultado = "VOCÊ É DA REGIÃO CENTRO-OESTE!<br>🐆 Região do Pantanal e do Cerrado, com destaque para o agronegócio e biodiversidade.";
    } 
    else if (estado === "PR" || estado === "RS" || estado === "SC") {
        resultado = "VOCÊ É DA REGIÃO SUL!<br>❄️ Região mais fria do Brasil, colonização europeia e forte tradição cultural.";
    } 
    else {
        resultado = "Sigla inválida ou estado não reconhecido.";
    }

    document.getElementById("resultado").innerHTML = resultado;
}