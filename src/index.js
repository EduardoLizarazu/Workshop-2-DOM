/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
**/
/**
 * 1. crear (1) imagen
 * 2. agregar #imagen
 * * 2.1 imagenes aleatorias
 * 3. Evento - DOM 0 -> Agregar imagenes
 * 
 * 4. Intersection observer
 * 5. Lazy loading
*/
 
import {  registerImage  } from "./lazy"

const maximum = 122;
const minimum = 1;
const random = () => Math.floor(Math.random() * (maximum - minimum) + minimum);

const createImageNode= () => {
    // create container div
    const container = document.createElement("div");
    container.className = "p4";

    // create img
    const image = document.createElement("img");
    image.className = "mx-auto";
    image.width = "320";
    // Al momento de cargar la src se carga la imagen por lo que la quitamos
    // Una forma de hacerla lazy es ponerla en la funcion action de lazy.js
    // image.src = `https://randomfox.ca/images/${random()}.jpg`;

    // la otra opcion es hacer un dataset que es del DOM
    // Esta propiedad por si sola contiene la lista de todos los atributos personalizados que le pusiste a tu elemento
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    // put img inside the container
    container.appendChild(image);

    return container; // return => node container
}

// select mountNode
const mountNode = document.querySelector("#images");

const addButton = document.querySelector("button");
const addImage = () => {
    const newImage = createImageNode(); // nodo img
    mountNode.appendChild(newImage) // put into mountNode
    registerImage(newImage); // listen
}
addButton.addEventListener("click", addImage);