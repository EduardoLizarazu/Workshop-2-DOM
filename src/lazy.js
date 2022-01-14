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