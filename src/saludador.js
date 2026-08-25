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

function obtenerTratoGenero(genero, edad) {
  if (edad > 30) {
    if (genero === "Masculino") return "Sr.";
    if (genero === "Femenino") return "Sra.";
  }
  return "";
}

function saludar(nombre, genero = "o", edad = 0,  fechaActual = new Date()) {
  const hora = fechaActual.getHours();
  const prefijo = obtenerPrefijo(hora);
  const trato = obtenerTratoGenero(genero, edad)
  return `¡${prefijo}, ${trato} ${nombre}!`;
}

export default saludar;