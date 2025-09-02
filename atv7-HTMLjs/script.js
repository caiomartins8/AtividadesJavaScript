function verificar() {
  let nome = document.getElementById("inputNome").value || "Visitante";
  let idade = +document.getElementById("inputIdade").value;

  let resultado = idade < 0 
    ? "UAI! Você tem idade negativa? Idade inválida!" 
    : idade < 18 
      ? `Olá ${nome}, você é menor de idade!` 
      : `Olá ${nome}, você é maior de idade!`;

  document.getElementById("resultado").innerText = resultado;
}
