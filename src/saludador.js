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


function saludar(nombre, fechaActual = new Date()) {
  const hora = fechaActual.getHours();
  const prefijo = obtenerPrefijo(hora);
  
  return `¡${prefijo}, ${nombre}!`;
}

export default saludar;