function verificar() {

    let nome = document.getElementById("inputNome").value
    let idade = document.getElementById("inputIdade").value
    let resultado = ""

    if (nome === "") {
        nome = "Visitante"
    }

    if (idade > 0 && idade < 18) {
        resultado = "Olá " + nome + " você é menor de idade!"
    } else if (idade < 0) {
        resultado = "UAI VOCÊ TEM IDADE NEGATIVA ? IDADE INVÁLIDA !"
    } else {
        resultado = "Olá " + nome + " você é maior de idade!"
    }

    document.getElementById("resultado").innerText = resultado;



}