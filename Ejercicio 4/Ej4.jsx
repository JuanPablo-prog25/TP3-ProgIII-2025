const { useState } = React;


function App() {
    //estado inicializado en izquierdo para el boton activo
  const [botonActivo, setBotonActivo] = useState("izquierdo");

  //funcion para boton izquierdo para cambiar el estado al hacer el click
  const ClickIzquierdo = () => {
    setBotonActivo("derecho");
  };

  const ClickDerecho = () => {
    setBotonActivo("izquierdo");
  };

  return (
    <>
      <h1>Alternar botones</h1>

      <button
      //boton izq solo esta habilitado si el boton activo es izquierdo
        onClick={ClickIzquierdo}
        disabled={botonActivo !== "izquierdo"}
      >
        Izquierdo
      </button>

      <button
      //solo se habilita el boton derecho si el boton activo es el derecho
        onClick={ClickDerecho}
        disabled={botonActivo !== "derecho"}
      >
        Derecho
      </button>
    </>
  );
}