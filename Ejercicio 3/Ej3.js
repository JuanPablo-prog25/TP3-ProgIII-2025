//url para obtener las tareas (le estableci limite de 30)
const tareasEndpoint = "https://jsonplaceholder.typicode.com/todos?_limit=30";
const boton = document.getElementById("cargar-tareas-boton");
const lista = document.getElementById("Lista-de-tareas");

//evento para el boton
boton.addEventListener("click", async () => {
  lista.innerHTML = ""; // Limpia la lista

  // Realiza una petición GET a la API
  const respuesta = await fetch(tareasEndpoint);

  // Validar que la respuesta sea correcta
  if (!respuesta.ok) {
    console.log("Hubo un error con la petición:", respuesta.status);
    return;
  }

  //guarda la repuesta
  const tareas = await respuesta.json();

  // filtrar solo las tareas completadas (completed: true)
  const tareasCompletadas = tareas.filter(tarea => tarea.completed);

  // recorre esas tareas y la agrega al <ul> como <li>
  tareasCompletadas.forEach(tarea => {
    const li = document.createElement("li");
    li.textContent = tarea.title;
    lista.appendChild(li);
  });
});