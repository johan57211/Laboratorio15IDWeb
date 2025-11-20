const secciones = document.querySelectorAll("section");

secciones.forEach((sec, index) => {
    sec.setAttribute("data-index", index);
});
