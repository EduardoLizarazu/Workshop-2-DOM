
export const createBgLoader = () => {
    const bgLoader = document.createElement("div");
    bgLoader.className = "mx-auto bg-gray-300 rounded-3xl";
    bgLoader.setAttribute("id", "bg-loader");
    bgLoader.style.width = "320px";
    bgLoader.style.height = "350px";
    return bgLoader;
}

export const removeBgLoader = () => {
    const mountNode = document.querySelector("#images");
    const rmNode = document.getElementById("bg-loader");
    mountNode.removeChild(rmNode);
}
