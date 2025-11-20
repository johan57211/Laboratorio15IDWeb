let parrafo = document.querySelector("#parrafo");

let nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Parrafo reemplazado";

parrafo.replaceWith(nuevoDiv);