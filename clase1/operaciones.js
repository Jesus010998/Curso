function calcular(operacion) {
  
  let Numero1 = Number(document.getElementById("Numero1").value);
  let Numero2 = Number(document.getElementById("Numero2").value);
  let resultado = 0;

  
  if (operacion == "+") {
    resultado = Numero1 + Numero2;
  } else if (operacion == "-") {
    resultado = Numero1 - Numero2;
  } else if (operacion == "/") {
    
    resultado = Numero1 / Numero2;
  } else if (operacion == "*") {
    resultado = Numero1 * Numero2;
  }

  
  document.getElementById("Resultado").innerHTML = "Resultado: " + resultado;
}