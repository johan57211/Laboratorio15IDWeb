const contenedor = document.getElementById("contenedor");

for (let i = 1; i <= 3; i++) {
    const p = document.createElement("p");
    p.textContent = "Párrafo " + i;
    contenedor.appendChild(p);
}

const parrafos = contenedor.querySelectorAll("p");
contenedor.removeChild(parrafos[1]);
