/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 * Objetivos:
 * 1. Lisener Image Wrapper
 * 2. Unlisen Imgae Wrapper
 * 4. Img -> Unobserve
 * 3. ImgWr obs 50% -> img src create
**/
 
import {  registerImage  } from "./lazy";
import { createBgLoader } from "./templates/loadingImgBg";
import { registerImgWrapper } from "./templates/loadingImgBg";
const random = () => {
    const maximum = 122;
    const minimum = 1;
    return Math.floor(Math.random() * (maximum - minimum) + minimum)
};

const createImageNode= () => {
    // create container div
    const container = document.createElement("div");
    container.className = "p4 relative z-50";

    // create img
    const image = document.createElement("img");
    image.className = "mx-auto rounded-3xl relative z-10";
    image.width = "320";
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(image); // put img inside the container
    // IMAGE WRAPPER
    const imageWrapperNode = createBgLoader();
    container.appendChild(imageWrapperNode);
    registerImgWrapper(imageWrapperNode)
    
    
    return container; // return => node container
}

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