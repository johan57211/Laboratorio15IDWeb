let lista = document.createElement("ul");

for (let i = 1; i<=5; i++){
    let li = document.createElement("li");
    li.textContent = "Elemento "+i;
    lista.appendChild(li);
}

let seccion = document.querySelector("section");

seccion.appendChild(lista); 