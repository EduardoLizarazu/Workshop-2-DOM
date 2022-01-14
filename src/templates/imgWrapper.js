
export const createBgLoader = () => {
    const bgLoader = document.createElement("div");
    bgLoader.className = "mx-auto bg-gray-300 rounded-3xl absolute inset-0";
    bgLoader.setAttribute("id", "bg-loader");
    bgLoader.style.width = "320px";
    bgLoader.style.height = "350px";
    return bgLoader;
}

export const removeBgLoader = () => {
    // const mountNode = document.querySelector("#images");
    const rmNode = document.getElementById("bg-loader");
    // mountNode.removeChild(rmNode);
    return rmNode;
}

const rmImgWrapperNode = entry => {
    if (entry.isIntersecting) {
        const rmBgNode = removeBgLoader();
        const parentNode = rmBgNode.parentElement;
        observerImgWrapper.unobserve(parentNode);
        parentNode.removeChild(rmBgNode);
        observerImgWrapper.unobserve(entry.target);
    }
}
const observerImgWrapper = new IntersectionObserver( entries => entries.forEach(rmImgWrapperNode), { threshold: 0.5 })

export const registerImgWrapper = imgWrapper => observerImgWrapper.observe(imgWrapper);