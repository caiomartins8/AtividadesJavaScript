function calcular() {

    let ValorCompra = document.getElementById("inputPreco").value;
    let resultado = "";

    if (ValorCompra >= 150) {
        resultado = `O frete será grátis, portanto: R$${ValorCompra}`;
    } else {
        let ValorTotal = ValorCompra + 20;
        resultado = `O valor total com frete é: R$${ValorTotal}`;
    }

    document.getElementById("resultado").innerText = resultado;
}