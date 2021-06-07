import React, { useState } from "react";
import shortid from "shortid";
import Error from "./Error";
import PropTypes from "prop-types";

const Formulario = ({setGasto, setCrearGasto}) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const agregarGasto = e => {
    e.preventDefault();
    //validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    //construir gasto
    const gasto = {
        nombre,
        cantidad,
        id: shortid.generate()
    }
    //pasar el gasto a componente principal
    setGasto(gasto);
    setCrearGasto(true);
    //resetear form
    setNombre('');
    setCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>
      {error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto"></Error> : null}

      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          nom
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        ></input>
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={e => setCantidad(parseInt(e.target.value))}
        ></input>
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      ></input>
    </form>
  );
};

export default Formulario;

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired,
};

