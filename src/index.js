/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
**/
console.log("Hello world!")
// crear (1) imagen
// agregar #imagen

{/* <div class="p4">
    <img class="mx-auto" width="320px"src="https://randomfox.ca/images/2.jpg" alt="fox image">
</div> */}

const createImageNode= () => {
    // create container div
    const container = document.createElement("div");
    container.className = "p4";

    // create img
    const image = document.createElement("img");
    image.className = "mx-auto";
    image.width = "320";
    image.src = "https://randomfox.ca/images/2.jpg";

    // put img inside the container
    container.appendChild(image);

    return container; // return => node container
}
const newImage = createImageNode();
const mountNode = document.querySelector("#images");
mountNode.appendChild(newImage) // la agrego