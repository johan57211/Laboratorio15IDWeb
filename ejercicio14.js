let lista = document.querySelector("ul");
let ultimoLi = lista.lastElementChild;
lista.insertBefore(ultimoLi, lista.firstElementChild);