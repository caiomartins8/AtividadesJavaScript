function verificar() {
  const preco = +document.getElementById("inputPreco").value;
  const quantidade = +document.getElementById("inputQuantidade").value;
  const idade = +document.getElementById("inputIdade").value;
  const cupom = document.getElementById("inputCupom").value;
  const produto = document.getElementById("inputProduto").value;

  let frete = cupom === "FRETE2025" ? 0 : 15;
  let totalBruto = preco * quantidade;
  let descontoQuantidade = quantidade >= 5 ? totalBruto * 0.05 : quantidade >= 2 ? totalBruto * 0.02 : 0;
  let totalComDesconto = totalBruto - descontoQuantidade;
  let totalFinal = totalComDesconto + frete;

  let status = "Boa! Compra Aprovada!";
  if (produto === "sim" && idade < 18) {
    status = "Ops! Compra cancelada: você é menor de idade para bebidas.";
    totalFinal = totalComDesconto = frete = 0;
  }

  document.getElementById("resultado").innerHTML = `
    Preço unitário: R$ ${preco.toFixed(2)} <br>
    Quantidade: ${quantidade} <br>
    Total bruto: R$ ${totalBruto.toFixed(2)} <br>
    Cupom aplicado: ${cupom || "Nenhum"} <br>
    Desconto por quantidade: R$ ${descontoQuantidade.toFixed(2)} <br>
    Valor com descontos: R$ ${totalComDesconto.toFixed(2)} <br>
    Frete: R$ ${frete.toFixed(2)} <br>
    <strong>Total final: R$ ${totalFinal.toFixed(2)}</strong> <br><br>
    <em>${status}</em>
  `;
}
