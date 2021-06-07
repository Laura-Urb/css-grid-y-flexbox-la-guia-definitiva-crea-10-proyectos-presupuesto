import React, { Fragment, useState } from "react";
import Error from "./Error";

import PropTypes from "prop-types";

const Pregunta = ({setpresupuesto, setrestante, setMostrarpregunta}) => {
  const [cantidad, setcantidad] = useState(0);

  const [error, setError] = useState(false);

  const definirPresupuesto = e => {
    setcantidad(parseInt(e.target.value));
  };

  const agregarPresupuesto = e => {
    
    e.preventDefault();

    //Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    setError(false);
    setpresupuesto(cantidad);
    setrestante(cantidad);
    setMostrarpregunta(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto"></Error> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Colocar tu presupuesto"
          onChange={definirPresupuesto}
        ></input>
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        ></input>
      </form>
    </Fragment>
  );
};

export default Pregunta;


Pregunta.propTypes = {
  setpresupuesto: PropTypes.func.isRequired,
  setrestante: PropTypes.func.isRequired,
  setMostrarpregunta: PropTypes.func.isRequired
};
