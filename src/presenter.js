import esBisiesto from "./bisiesto.js";

const anio = document.querySelector("#anio");
const form = document.querySelector("#bis-form");
const div = document.querySelector("#bisiesto-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const anioNumber = Number.parseInt(anio.value);
  const flag = esBisiesto(anioNumber);
  if(flag){
    div.innerHTML = "<p>Es bisiesto</p>";
  }
  else{
    div.innerHTML = "<p>NO es bisiesto</p>";
  }
});
