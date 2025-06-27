const {useState}= React;

function App(){

    //se crean los estados
    const [num1,setNum1]=useState("");
    const [num2,setNum2]=useState("");
    const[operacion,setOperacion]=useState("sumar");
    const [resultado,setResultado]=useState(null);

    //funcion para enviar el formulario
    const handleSubmit = (e) =>{
        e.preventDefault();
        const n1= parseFloat(num1);
        const n2=parseFloat(num2);

        let result;

        //switch para decidir la operacion
        switch(operacion){
            case "sumar":
                result=n1+n2;
                break;
            case "restar":
                  result=n1-n2;
                  break;
             case "multiplicar":
                    result=n1*n2;
                    break;
            case "dividir":
                result=n1/n2;
                break;
                default:
                    result="Operacion invalida";
        }
        //guardar el texto del resultado para mostrarlo
        setResultado("Resultado: "+result);

    };
    return (
        <>
        <h1>Operaciones</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Numero1:
                <input
                 type="number" value={num1}
                 onChange={(e)=>setNum1(e.target.value)}
                 required 
                 />
            </label>
            <br />
             <label>
                Numero2:
                <input
                 type="number" value={num2}
                 onChange={(e)=>setNum2(e.target.value)}
                 required 
                 />
            </label>
            <br />
            <label>
                Operacion:
                <select
                    value={operacion}
                    onChange={(e)=>setOperacion(e.target.value)}
                    >
                        <option value="sumar">Sumar</option>
                        <option value="restar">Restar</option>
                        <option value="multiplicar">Multiplicar</option>
                        <option value="dividir">Dividir</option>
                </select>
            </label>
            <br />
            <button type="submit" disabled={operacion==="dividir" && parseFloat(num2)===0}> 
                {operacion==="dividir"&&parseFloat(num2)===0?"Boton deshabilitado":"Calcular"}
            </button>
        </form>
        <div>{resultado}</div>
        </>

    )

}