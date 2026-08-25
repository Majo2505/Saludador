function obtenerPrefijoHora(hora, idioma) {
  if (hora >= 6 && hora < 12) {
    return idioma === "en" ? "Good morning" : "Buenos días";
  } else if (hora >= 12 && hora < 20) {
    return idioma === "en" ? "Good afternoon" : "Buenas tardes";
  } else {
    return idioma === "en" ? "Good evening" : "Buenas noches";
  }
}

function obtenerTratoGenero(genero, edad, idioma) {
  if (edad > 30) {
    if (genero === "Masculino") return idioma === "en" ? "Mr." : "Sr.";
    if (genero === "Femenino") return idioma === "en" ? "Mrs." : "Sra.";
  }
  return "";
}

function saludar(nombre, genero = "o", edad = 0, idioma = "es", fechaActual = new Date())
{
  if (edad < 0 || edad > 120) {
    return idioma === "en" 
      ? "Error: Invalid age. Please enter a value between 0 and 120." 
      : "Error: Edad inválida. Por favor ingrese un valor entre 0 y 120.";
  }
  const nombrePorDefecto = idioma === "en" ? "guest" : "visitante";   
  const esVacio = !nombre || nombre.trim() === "";  
  const nombreFinal = esVacio ? nombrePorDefecto : nombre;
  const hora = fechaActual.getHours();
  const prefijo = obtenerPrefijoHora(hora, idioma);
  const trato = nombreFinal === "visitante" ? "" : obtenerTratoGenero(genero, edad, idioma)
  const inicioAclamacion = idioma === "en" ? "" : "¡";
  return `${inicioAclamacion}${prefijo}, ${trato} ${nombreFinal}!`;
}

export default saludar;