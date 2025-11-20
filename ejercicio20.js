const seccion = document.querySelector("section");

const h2Viejo = seccion.querySelector("h2");
if (h2Viejo) {
    seccion.removeChild(h2Viejo);
}

const nuevoH2 = document.createElement("h2");
nuevoH2.textContent = "Título nuevo";
seccion.appendChild(nuevoH2);

const nuevoP = document.createElement("p");
nuevoP.textContent = "Descripción generada";
seccion.appendChild(nuevoP);

const lista = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = "Ítem " + i;
    lista.appendChild(li);
}

seccion.appendChild(lista);
