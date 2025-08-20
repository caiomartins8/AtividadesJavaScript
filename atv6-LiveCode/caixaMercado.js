const prompt = require("prompt-sync")();

let preco = Number(prompt(" Qual valor do produto: "));
let quantidade = Number(prompt(" Qual a quantidade: "));
let idade = Number(prompt(" Qual sua idade: "));
let cupom = prompt(" Qual seu cupom? ");
let produto = prompt(" Você comprou bebida? (se não , coloque 'não comprei') ");

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

let status = "Boa ! Compra Aprovada!";
if (produto === "sim" && idade < 18) {
    status = "Ops ! Você é menor de idade para bebida)";
    totalFinal = 0;
    frete = 0;
    totalComDesconto = 0;
}

console.log("----------- RESUMO DA COMPRA -----------");
console.log("Preço unitário: R$", preco.toFixed(2));
console.log("Quantidade:", quantidade);
console.log("Total bruto: R$", totalBruto.toFixed(2));
console.log("Cupom aplicado:", cupom || "Nenhum");
console.log("Desconto por quantidade: R$", descontoQuantidade.toFixed(2));
console.log("Valor com descontos: R$", totalComDesconto.toFixed(2));
console.log("Frete: R$", frete.toFixed(2));
console.log("Total final: R$", totalFinal.toFixed(2));
console.log("Status:", status);
console.log("----------------------------------------");
