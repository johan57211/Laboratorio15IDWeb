const lista = document.getElementById("miLista");   // obtenemos el <ul>

for (let item of lista.children) {                  // recorremos sus hijos <li>
    console.log(item.textContent);                  // mostramos su texto
}
