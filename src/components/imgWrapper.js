
export const createImgWrapper = () => {
    const imgWrapper = document.createElement("div");
    imgWrapper.className = "mx-auto bg-gray-300 rounded-3xl  inset-0";
    imgWrapper.setAttribute("id", "bg-loader");
    imgWrapper.style.width = "320px";
    imgWrapper.style.height = "350px";
    return imgWrapper;
}

const removeImgWrapper = () => {
    const rmNode = document.getElementById("bg-loader");
    rmNode.parentElement.removeChild(rmNode);
}

const rmImgWrapperNode = entry => {
    if (entry.isIntersecting) {
        removeImgWrapper();
        observerImgWrapper.unobserve(entry.target);
    }
}
const observerImgWrapper = new IntersectionObserver( entries => entries.forEach(rmImgWrapperNode), { threshold: 0.5 })

export const registerImgWrapper = imgWrapper => observerImgWrapper.observe(imgWrapper);