const formulario = document.getElementById("formulario");
const operacion = document.getElementById("operacion");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

// Deshabilitar el botón si se selecciona división
operacion.addEventListener("change", () => {
  const esDivision = operacion.value === "dividir";
  calcular.disabled = esDivision;
  calcular.textContent = esDivision ? "Boton deshabilitado" : "Calcular";
});

// Evento submit del formulario
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Evitar recarga

  const numero1 = parseFloat(formulario.num1.value);
  const numero2 = parseFloat(formulario.num2.value);
  let result;

  switch (operacion.value) {
    case "sumar":
      result = numero1 + numero2;
      break;
    case "restar":
      result = numero1 - numero2;
      break;
    case "multiplicar":
      result = numero1 * numero2;
      break;
    default:
      result = "Operación no disponible.";
  }

  resultado.textContent = "Resultado: " + result;
});