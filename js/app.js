// Seleccionar contenido del DOM

// querySelector .(clase) #(id)
// retorna un objeto que es el DOM

const heading = document.querySelector(".header__texto h2"); // retorna 0 o 1 elementos
// const heading = document.querySelector("#heading"); // retorna 0 o 1 elementos
// agregar clase nueva en el objeto
// heading.classList.add("nueva-clase");

console.log(heading);
console.log(heading.tagName);
console.log(heading.textContent);

// heading.textContent = "Nuevo Heading";

// querySelectorALL

// getElementbyId
