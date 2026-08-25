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
  const nombreFinal = nombre.trim() === "" ? "visitante" : nombre;
  const hora = fechaActual.getHours();
  const prefijo = obtenerPrefijoHora(hora, idioma);
  const trato = nombreFinal === "visitante" ? "" : obtenerTratoGenero(genero, edad, idioma)

  const inicioAclamacion = idioma === "en" ? "" : "¡";
  return `${inicioAclamacion}${prefijo}, ${trato} ${nombreFinal}!`;
}

export default saludar;