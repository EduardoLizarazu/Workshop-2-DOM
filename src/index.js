/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 * 
**/
 
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

    // Console report
    appendedImages++;
    printLog();
}
addButton.addEventListener("click", addImage);

const cleanButton = document.querySelector("#clean-img-button");
const cleanImg = () => {
    while (mountNode.childElementCount) {
        mountNode.childNodes.forEach(item => mountNode.removeChild(item));
    }
    // Console report
    appendedImages = 0;
    loadedImages = 0;
    printLog();
}
cleanButton.addEventListener("click", cleanImg);