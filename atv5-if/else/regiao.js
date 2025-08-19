const prompt = require("prompt-sync")();

console.log("----------- VOCÊ QUER DESCOBRIR EM QUAL REGIÃO  DO BRASIL VOCÊ MORA ? -----------");

let estado = prompt("Qual seu estado (sigla)? ").toUpperCase(); // garante maiúsculo


if (estado === "RJ" || estado === "MG" || estado === "ES" || estado === "SP") {
  console.log("VOCÊ É DA REGIÃO SUDESTE!");
  console.log("🏖️ Turismo variado – praias famosas (RJ, ES), serras (MG) e centros históricos.");
}

else if (estado === "AC" || estado === "AM" || estado === "AP" || estado === "PA" || estado === "RO" || estado === "RR" || estado === "TO") {
  console.log("VOCÊ É DA REGIÃO NORTE!");
  console.log("🌳 Maior região em território – ocupa quase metade do Brasil.");
} 


else if (estado === "AL" || estado === "BA" || estado === "CE" || estado === "MA" || estado === "PB" || estado === "PE" || estado === "PI" || estado === "RN" || estado === "SE") {
  console.log("VOCÊ É DA REGIÃO NORDESTE!");
  console.log("🌞 Clima variado – praias tropicais, sertão semiárido e muita cultura regional.");
} 


else if (estado === "DF" || estado === "GO" || estado === "MT" || estado === "MS") {
  console.log("VOCÊ É DA REGIÃO CENTRO-OESTE!");
  console.log("🐆 Região do Pantanal e do Cerrado, com destaque para o agronegócio e biodiversidade.");


} else if (estado === "PR" || estado === "RS" || estado === "SC") {
  console.log("VOCÊ É DA REGIÃO SUL!");
  console.log("❄️ Região mais fria do Brasil, colonização europeia e forte tradição cultural.");


} else {
  console.log("Sigla inválida ou estado não reconhecido.");
}
