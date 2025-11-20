const seccion = document.getElementById("contenedor");

const arr = Array.from(seccion.querySelectorAll("p"));

arr.sort((a, b) => a.textContent.localeCompare(b.textContent));
arr.forEach(p => seccion.appendChild(p));