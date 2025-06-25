//array con las palabras a filtrar
const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];
const formulario = document.getElementById("formulario");
const busqueda = document.getElementById("busqueda");
const resultado = document.getElementById("resultado");

//evento submit para enviar el formulario
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const texto = busqueda.value.trim().toLowerCase();
  resultado.innerHTML = "";

  //valida si el campo esta vacio
  if (texto === "") {
    alert("Ingrese una palabra para filtrar");
    resultado.innerHTML = "Ingrese la palabra por favor";
    return;
  }

  //filtra las palabras que contienen el texto buscado
  const pfiltradas = palabras.filter((palabra) => {
    return palabra.toLowerCase().includes(texto);
  });

  //si hay resultados las muestra en una lista separada por coma
  if (pfiltradas.length > 0) {
    resultado.textContent = "Resultados: " + pfiltradas.join(", ");
  } else {
    resultado.textContent = "No se encontraron coincidencias.";
  }
});