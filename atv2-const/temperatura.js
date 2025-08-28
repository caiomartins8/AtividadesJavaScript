function verificar() {
  let celsius = Number(document.getElementById("inputTemperatura").value);
  let resultado = "";

  if (isNaN(celsius)) {
    resultado = "Por favor, digite uma temperatura válida!";
  } else {
    const fator = 9 / 5;
    let fahrenheit = (celsius * fator) + 32;

    resultado = `${celsius}°C em Fahrenheit são: ${fahrenheit.toFixed(2)}°F`;
  }

  document.getElementById("resultado").innerText = resultado;
}
