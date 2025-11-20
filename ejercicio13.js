let primerArticle = document.querySelector("article");
let main = document.querySelector("main");
let nuevoArticle = document.createElement("article");

nuevoArticle.innerHTML = primerArticle.innerHTML;

main.appendChild(nuevoArticle);