let parrafos = document.querySelectorAll("p");

if (parrafos.length > 0){
    let ultimoParrafo = parrafos[parrafos.length - 1];
    ultimoParrafo.remove();
}