import saludar from "./saludador";

const nombreinput = document.querySelector("#nombreInput");
const generoSelect = document.querySelector("#generoSelect");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreinput.value;
  const genero = generoSelect.value;

  div.innerHTML = "<p>" + saludar(nombre,genero) + "</p>";
});
