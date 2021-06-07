import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  const [presupuesto, setpresupuesto] = useState(0);
  const [restante, setrestante] = useState(0);
  const [mostrarpregunta, setMostrarpregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);

  useEffect(() => {
    if (crearGasto) {
      setGastos([...gastos, gasto]);
      setCrearGasto(false);
      setrestante(restante - gasto.cantidad)
    }
  }, [gasto, crearGasto, gastos, restante]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal">
          {mostrarpregunta ? (
            <Pregunta
              setpresupuesto={setpresupuesto}
              setrestante={setrestante}
              setMostrarpregunta={setMostrarpregunta}
            ></Pregunta>
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  setGasto={setGasto}
                  setCrearGasto={setCrearGasto}
                ></Formulario>
              </div>
              <div className="one-half column">
                <Listado gastos={gastos}></Listado>
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                ></ControlPresupuesto>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
