/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
**/

// crear (1) imagen
// agregar #imagen

{/* <div class="p4">
    <img class="mx-auto" width="320px"src="https://randomfox.ca/images/2.jpg" alt="fox image">
</div> */}

const createImageNode= () => {
    const image = document.createElement("img");
    image.className = "mx-auto";
    image.width = "320px";
    image.src = "https://randomfox.ca/images/2.jpg"

    return image; // retorno el nodo
}
const newImage = createImageNode();