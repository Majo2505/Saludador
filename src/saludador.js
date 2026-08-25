function obtenerPrefijo(hora) {
  if (hora >= 6 && hora < 12) {
    return "Buenos días";
  } 
  else if (hora >= 12 && hora < 20) {
    return "Buenas tardes";
  } 
  else {
    return "Buenas noches";
  }
}

function obtenerTratoGenero(genero) {
  if (genero === "Masculino") {
    return "Sr.";
  } 
  else if (genero === "Femenino") {
    return "Sra.";
  }
  return "";
}

function saludar(nombre, genero = "o",  fechaActual = new Date()) {
  const hora = fechaActual.getHours();
  const prefijo = obtenerPrefijo(hora);
  const trato = obtenerTratoGenero(genero)
  return `¡${prefijo}, ${trato} ${nombre}!`;
}

export default saludar;