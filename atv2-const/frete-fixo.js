function verificar() {
    const frete = 20;
    let pedido = Number(document.getElementById("inputPedido").value); 
    let resultado = "";
    let total = 0;

    if (pedido < 100) {
        total = pedido + frete;

        resultado = `Seu frete é de: R$ ${frete}<br>
                     Seu produto é: R$ ${pedido}<br>
                     O Total é de: R$ ${total}`;
    } else {
        resultado = `PARABÉNS! VOCÊ GANHOU FRETE GRÁTIS!<br>
                     O total será somente o preço do produto: R$ ${pedido}`;
    }

    document.getElementById("resultado").innerHTML = resultado;
}
