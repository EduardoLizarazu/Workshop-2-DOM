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
import { createImgWrapper } from "./components/imgWrapper";
import { registerImgWrapper } from "./app/lazy";
// select mountNode
const mountNode = document.querySelector("#images");

const addButton = document.querySelector("button");
const addImage = () => {
    const newImage = createImageNode(); // node container img created
    mountNode.appendChild(newImage) // put into mountNode
    // IMAGE WRAPPER
    const newImgWrapper = createImgWrapper();
    newImage.appendChild(newImgWrapper);
    // Observe 
    registerImgWrapper(newImgWrapper);
}
addButton.addEventListener("click", addImage);