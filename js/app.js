// Seleccionar contenido del DOM

// querySelector .(clase) #(id)
// retorna un objeto que es el DOM

const heading = document.querySelector(".header__texto h2"); // retorna 0 o 1 elementos
// const heading = document.querySelector("#heading"); // retorna 0 o 1 elementos
// agregar clase nueva en el objeto
// heading.classList.add("nueva-clase");

// console.log(heading);
// console.log(heading.tagName);
// console.log(heading.textContent);

// heading.textContent = "Nuevo Heading";

// querySelectorALL
// retorna varios objetos

const enlaces = document.querySelectorAll(".navegacion a");
// console.log(enlaces);
// console.log(enlaces[0]);
// enlaces[0].textContent = "Nuevo texto para enlace";
// enlaces[0].href = "http://www.google.cl";
// enlaces[0].classList.add("nueva-clase");
// enlaces[0].classList.remove("navegacion__enlace");

// getElementbyId, deprecado no se utiliza mucho

// const heading2 = document.getElementById("heading");
// console.log(heading2);

// Generar un nuevo enlaces
// buenas practicas recomienda usar mayusculas las etiquetas
// const nuevoEnlace = document.createElement("A");

// // agregar href
// nuevoEnlace.href = "nuevo-enlace.html";

// // agregar texto
// nuevoEnlace.textContent = "Tienda Virtual";

// // agregar la clase
// nuevoEnlace.classList.add("navegacion__enlace");

// // agregar el elemento al documento
// const navegacion = document.querySelector(".navegacion");
// navegacion.appendChild(nuevoEnlace);

// console.log(nuevoEnlace);

// Eventos
console.log(1);

window.addEventListener("load", function () {
  console.log(2);
});

window.addEventListener("load", imprimir);

// load espera que JS, media, img,css del html esten listos
window.onload = function () {
  console.log(3);
};

document.addEventListener("DOMContentLoaded", function () {
  // solo espera por HMTL, pero no espera los CSS o imagenes o media
  console.log(4);
});

console.log(5);

function imprimir() {
  console.log(2.1);
}

window.onscroll = function () {
  console.log("scrolling...");
};
