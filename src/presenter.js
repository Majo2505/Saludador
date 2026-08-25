import saludar_con_nombre from "./saludador";

const nombreinput = document.querySelector("#nombreInput");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreinput.value;

  div.innerHTML = "<p>" + saludar_con_nombre(nombre) + "</p>";
});
