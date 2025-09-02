function verificar() {
  const num1 = +document.getElementById("inputNum1").value;
  const num2 = +document.getElementById("inputNum2").value;

  const maior = num1 > num2 ? `${num1} é maior que ${num2}` 
              : num1 < num2 ? `${num2} é maior que ${num1}` 
              : `${num1} é igual a ${num2}, não tem maior`;

  const menor = num1 < num2 ? `${num1} é menor que ${num2}` 
              : num1 > num2 ? `${num2} é menor que ${num1}` 
              : `${num1} é igual a ${num2}, não tem menor`;

  const igualdade = num1 == num2 
              ? `${num1} é igual a ${num2}` 
              : `${num1} é diferente de ${num2}`;

  document.getElementById("resultado").innerHTML = 
    `${maior} <br>${menor} <br>${igualdade} <br>`;
}
