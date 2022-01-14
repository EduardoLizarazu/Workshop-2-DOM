import { createImgWrapper } from "./imgWrapper";
import { registerImgWrapper } from "./imgWrapper";

const random = () => {
    const maximum = 122;
    const minimum = 1;
    return Math.floor(Math.random() * (maximum - minimum) + minimum)
};

export const createImageNode= () => {
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
    const imageWrapperNode = createImgWrapper();
    container.appendChild(imageWrapperNode);
    // Observe 
    registerImgWrapper(imageWrapperNode)
    
    
    return container; // return => node container
}