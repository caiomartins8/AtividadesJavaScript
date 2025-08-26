function calcular() {
    let Saldo = document.getElementById("inputSaldo").value;
    let Produto = document.getElementById("inputPreco").value;
    let resultado = "";

    if (Saldo >= Produto) {
        resultado = `Você tem saldo para comprar o produto.`;
    } else {
        resultado = `Você não tem saldo para comprar o produto.`;
    }

    document.getElementById("resultado").innerHTML = resultado;
}
