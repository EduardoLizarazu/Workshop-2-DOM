import getData from "../utils/getData";

const API = "https://randomfox.ca/floof/";

const viewImage = async () => {
    const urlCatch = await getData(API);
    // HTML
    const parent = document.querySelector("#image-app");
    const image = document.createElement("img");
    const container = document.createElement("div");
    parent.appendChild(container);
    container.appendChild(image);

    // Atrubute
    container.className = "p4 my-5";
    image.style.width = "320px";
    image.alt = "fox image";
    image.src = `${urlCatch}`;
    image.loading = "lazy";
} 

export default viewImage;