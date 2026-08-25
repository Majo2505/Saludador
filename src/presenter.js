import saludar from "./saludador";

const nombreinput = document.querySelector("#nombreInput");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreinput.value;

  div.innerHTML = "<p>" + saludar(nombre) + "</p>";
});
