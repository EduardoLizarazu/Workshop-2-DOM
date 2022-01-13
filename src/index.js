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
import h from "hyperscript";
const maximum = 122;
const minimum = 1;
const random = () => Math.floor(Math.random() * (maximum - minimum) + minimum);

const createImageNode= () => {
    // create img and attr
    // const image = document.createElement("img");
    // image.className = "mx-auto";
    // image.width = "320";
    // image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
    // -----
    // create img and attr
    const image = h("img.mx-auto", {
        width: "320",
        "data-src": `https://randomfox.ca/images/${random()}.jpg`, 
    })

    // create container div
    // const container = document.createElement("div");
    // container.className = "p4";
    // ----
    // put img inside the container
    // container.appendChild(image);
    // ----
    // create container hyperscript and put img inside the container
    const container = h("div.p-4", image);

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