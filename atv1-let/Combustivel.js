function calcular() {
    let LitroPorKm = document.getElementById("inputKM").value;
    let Distancia = document.getElementById("inputDistancia").value;
    let ValorLitro = document.getElementById("inputValor").value;
    let resultado = "";

    
    let LitrosNecessarios = Distancia / LitroPorKm;
    let ValorLitroFinal = LitrosNecessarios * ValorLitro;

    resultado = `Serão necessários: ${LitrosNecessarios.toFixed(2)} litros, e custará: R$ ${ValorLitroFinal.toFixed(2)}`;

    document.getElementById("resultado").innerText = resultado;
}
