/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 * Objetivos:
 * 1. Lisener Image Wrapper
 * 2. Unlisen Imgae Wrapper
 * 4. Img Container -> Unobserve
 * 3. ImgWr obs 50% -> img src create
**/
 
import {  registerImage  } from "./app/lazy";
import { createImageNode } from "./components/img";
// select mountNode
const mountNode = document.querySelector("#images");

const addButton = document.querySelector("button");
const addImage = () => {
    const newImage = createImageNode(); // node container img created
    mountNode.appendChild(newImage) // put into mountNode
    // ----
    // registerImage(newImage); // listen the container img
}
addButton.addEventListener("click", addImage);