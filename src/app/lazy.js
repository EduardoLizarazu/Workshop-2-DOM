// Is intersecting ? // true -> interstion viewport
const isIntersecting = entry => entry.isIntersecting;

const observer = new IntersectionObserver( entries => {
    entries.filter(isIntersecting).forEach(loadImage);
}, { threshold: 0.5 })

const loadImage = entry => {
    // put the src to render img
    const container = entry.target;
    const image = container.firstChild 
    const url = image.dataset.src;
    image.src = url;

    observer.unobserve(container) // unobserve
}

// Intersection Observe -> observe(image)
export const registerImage = image => observer.observe(image);



const rmImgWrapperNode = entry => {
    if (entry.isIntersecting) {
        const rmNode = document.getElementById("bg-loader");
        const parent =  rmNode.parentElement
        parent.removeChild(rmNode);
        observerImgWrapper.unobserve(entry.target);

        // put the src to render img
        const image = parent.firstChild 
        const url = image.dataset.src;
        image.src = url;
    }
}
const observerImgWrapper = new IntersectionObserver( entries => entries.forEach(rmImgWrapperNode), { threshold: 0.5 })

export const registerImgWrapper = imgWrapper => observerImgWrapper.observe(imgWrapper);