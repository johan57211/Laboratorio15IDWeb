const colores = ["yellow", "green", "blue", "red", "gray"];

const divs = document.querySelectorAll("div");

divs.forEach((div, index) => {
    div.style.backgroundColor = colores[index % colores.length];
});
