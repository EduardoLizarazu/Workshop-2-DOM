export const createImgWrapper = () => {
    const imgWrapper = document.createElement("div");
    imgWrapper.className = "mx-auto bg-gray-300 rounded-3xl  inset-0";
    imgWrapper.setAttribute("id", "bg-loader");
    imgWrapper.style.width = "320px";
    imgWrapper.style.height = "350px";
    return imgWrapper;
}