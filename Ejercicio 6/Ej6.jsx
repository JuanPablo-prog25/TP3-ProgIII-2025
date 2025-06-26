const { useState } = React;

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [claseColor, setClaseColor] = useState("");

  const calcularIMC = (e) => {
    e.preventDefault();

    const p = parseFloat(peso);
    const a = parseFloat(altura);

    if ( a <= 0 && p<=0) {
      setMensaje("Valores inválidos.");
      setClaseColor("");
      setImc(null);
      return;
    }

    const valorIMC = parseFloat((p / (a * a))).toFixed(1);
    setImc(valorIMC);

    if (valorIMC < 18.5) {
      setMensaje("Nivel bajo de peso");
      setClaseColor("amarillo");
    } else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
      setMensaje("Peso normal");
      setClaseColor("verde");
    } else if (valorIMC >= 25 && valorIMC <= 29.9) {
      setMensaje("Sobrepeso");
      setClaseColor("naranja");
    } else {
      setMensaje("Obesidad");
      setClaseColor("rojo");
    }
  };

  // el mensaje se muestra solamente si hay un resultado si no, no
  let mensajeResultado = null;

  if (imc !== null) {
    mensajeResultado = (
      <div className={"resultado "+ claseColor}>
        IMC: {imc} = {mensaje}
      </div>
    );
  }

  return (
    <>
      <h1>Calculadora de IMC</h1>

      <form onSubmit={calcularIMC}>
        <label>
          Peso (kg):
          <input
            type="number"
            step="0.1"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Altura (m):
          <input
            type="number"
            step="0.01"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required
          />
        </label>
        <br />

        <button type="submit">Calcular IMC</button>
      </form>

      {mensajeResultado}
    </>
  );
}
