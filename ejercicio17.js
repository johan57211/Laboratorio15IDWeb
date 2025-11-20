const divs = document.querySelectorAll("div");
const cantidad = divs.length;

const nuevoP = document.createElement("p");
nuevoP.textContent = "Hay " + cantidad + " divs en este documento";

document.body.appendChild(nuevoP);
