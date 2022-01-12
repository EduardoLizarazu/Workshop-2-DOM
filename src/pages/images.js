import imageFetched from "../utils/getData";

const viewImage = async () => {
    const urlCatch = await imageFetched;
    // HTML
    const parent = document.querySelector("#image-app");
    const image = document.createElement("img");
    const container = document.createElement("div");
    parent.appendChild(container);
    container.appendChild(image);

    // Atrubute
    container.className = "p4 my-5";
    // image.src = `https://randomfox.ca/images/2.jpg`;
    image.style.width = "320px";
    image.alt = "fox image";
    image.src = `${urlCatch}`;
} 

export default viewImage;