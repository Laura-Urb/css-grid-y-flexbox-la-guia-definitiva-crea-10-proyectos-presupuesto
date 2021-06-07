export const revisarPresupuesto = (presupesto, restante) => {
  let clase;

  if (presupesto / 4 > restante) clase = "alert alert-danger";
  else if (presupesto / 2 > restante) clase = "alert alert-warning";
  else clase = "alert alert-succes";

  return clase;
}
