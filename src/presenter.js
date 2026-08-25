import saludar from "./saludador";

const nombreinput = document.querySelector("#nombreInput");
const generoSelect = document.querySelector("#generoSelect");
const edadinput= document.querySelector("#edadInput")
const idiomaSelect = document.querySelector("#idiomaSelect");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreinput.value;
  const genero = generoSelect.value;
  const edad = edadinput.value;
  const idioma = idiomaSelect.value;

  div.innerHTML = "<p>" + saludar(nombre,genero,edad,idioma) + "</p>";
});
