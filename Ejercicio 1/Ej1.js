const formulario = document.getElementById("formulario");
const operacion = document.getElementById("operacion");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
const num2 = formulario.num2;

// Funcion para deshabilitar el boton en caso de dividir por 0
function actualizarBoton() {
  const esDivision = operacion.value === "dividir";
  const valorNum2 = parseFloat(num2.value);
  const esCero = valorNum2 === 0;

  calcular.disabled = esDivision && esCero;
  calcular.textContent = esDivision && esCero? "Boton deshabilitado": "Calcular";
}
//cambiar el estado  del boton
operacion.addEventListener("change", actualizarBoton);
num2.addEventListener("input", actualizarBoton);

//envia el formulario
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); 

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
    case "dividir":
      result = numero1 / numero2;
      break;
    default:
      result = "Operación no disponible.";
  }

  resultado.textContent = "Resultado: " + result;
});