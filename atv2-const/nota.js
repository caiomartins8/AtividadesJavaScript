function verificar() {
  const media = 60;
  let nota = Number(document.getElementById("inputNota").value);
  let resultado = "";

  if (nota > media) {
    resultado = "Parabéns! Você foi aprovado!";
  } else {
    resultado = "Ah não! Você foi reprovado!";
  }

  document.getElementById("resultado").innerText = resultado;
}
