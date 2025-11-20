let nuevoH3 = document.createElement("h3");
nuevoH3.textContent = "h3 creado con JS";

let parrafo = document.querySelector("p");

document.body.insertBefore(nuevoH3, parrafo);
