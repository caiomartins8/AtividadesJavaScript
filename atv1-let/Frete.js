let ValorCompra = 249;
let resultado;


if (ValorCompra >= 150) {
        resultado = ValorCompra;
    console.log("O frete será grátis , portanto : R$" , resultado);
}
else {
    resultado = ValorCompra + 20
    console.log("O valor total com frete é: R$" , resultado);

}