const prompt = require("prompt-sync")();

let nomeAluno = prompt("Qual seu nome? ");
let notaP1 = Number(prompt("Qual a nota da sua P1? "));
let notaP2 = Number(prompt("Qual a nota da sua P2? "));
let notaP3 = Number(prompt("Qual a nota da sua P3? "));
let frequencia = Number(prompt("Qual a sua frequência de 0 a 100? "));
let participacao = prompt("Você foi participativo? (sim/não) ").toLowerCase();

if (notaP1 >= 0 && notaP1 <= 10) {
  notaP1 = Math.round(notaP1);
} else {
  console.log("Nota P1 inválida. Programa encerrado.");
  process.exit();
}

if (notaP2 >= 0 && notaP2 <= 10) {
  notaP2 = Math.round(notaP2);
} else {
  console.log("Nota P2 inválida. Programa encerrado.");
  process.exit();
}

if (notaP3 >= 0 && notaP3 <= 10) {
  notaP3 = Math.round(notaP3);
} else {
  console.log("Nota P3 inválida. Programa encerrado.");
  process.exit();
}

let mediaNotas = (notaP1 + notaP2 + notaP3) / 3;

if (participacao === "sim" && mediaNotas < 10) {
  mediaNotas += 1;
  if (mediaNotas > 10) {
    mediaNotas = 10;
  }
}

if (frequencia < 75) {
  console.log(" Você foi reprovado por falta!");
}

let statusFinal = "";
let notaPF = 0;
let mediaComPF = 0;

if (mediaNotas >= 4 && mediaNotas < 7) {
  console.log("Você ficou de recuperação com a média:", mediaNotas.toFixed(1));
  notaPF = Number(prompt("Digite a nota da sua Prova Final (PF): "));
}

console.log("----------- BOLETIM FINAL -----------");
console.log("Nome:", nomeAluno);
console.log("Notas: P1 =", notaP1, "| P2 =", notaP2, "| P3 =", notaP3);
console.log("Frequência:", frequencia + "%");
console.log("Participação:", participacao);
console.log("Média Final:", mediaNotas.toFixed(1));


console.log("Situação Final:", statusFinal);
console.log("-------------------------------------");
