function verificar() {
      let preco = Number(document.getElementById("inputPreco").value);
      let quantidade = Number(document.getElementById("inputQuantidade").value);
      let idade = Number(document.getElementById("inputIdade").value);
      let cupom = document.getElementById("inputCupom").value;
      let produto = document.getElementById("inputProduto").value;

      let frete = 15;
      let totalBruto = preco * quantidade;
      let descontoQuantidade = 0;

      if (quantidade >= 5) {
          descontoQuantidade = totalBruto * 0.05;
      } else if (quantidade >= 2) {
          descontoQuantidade = totalBruto * 0.02;
      }

      let totalComDesconto = totalBruto - descontoQuantidade;

      if (cupom === "FRETE2025") {
          frete = 0;
      }

      let totalFinal = totalComDesconto + frete;

      let status = "Boa! Compra Aprovada!";
      if (produto === "sim" && idade < 18) {
          status = "Ops! Compra cancelada: você é menor de idade para bebidas.";
          totalFinal = 0;
          frete = 0;
          totalComDesconto = 0;
      }

      document.getElementById("resultado").innerHTML = `
          Preço unitário: R$ ${preco.toFixed(2)} <br>
          Quantidade: ${quantidade} <br>
          Total bruto: R$ ${totalBruto.toFixed(2)} <br>
          Cupom aplicado: ${cupom || "Nenhum"} <br>
          Desconto por quantidade: R$ ${descontoQuantidade.toFixed(2)} <br>
          Valor com descontos: R$ ${totalComDesconto.toFixed(2)} <br>
          Frete: R$ ${frete.toFixed(2)} <br>
          <strong>Total final: R$ ${totalFinal.toFixed(2)}</strong
      `;

    }