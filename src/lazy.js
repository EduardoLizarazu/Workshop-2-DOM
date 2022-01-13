
// Is intersecting ? // true -> interstion viewport
const isIntersecting = entry => entry.isIntersecting;

const observer = new IntersectionObserver( entries => {
    console.log(entries[0].isIntersecting)
    entries.filter(isIntersecting).forEach(loadImage)
}, { threshold: 0.5 })

const loadImage = entry => {
    // put the src to render img
    const container = entry.target;
    const image = container.firstChild 
    const url = image.dataset.src;
    image.src = url;
    
    observer.unobserve(container) // unobserve
}

export const registerImage = image => {
    // Intersection Observe -> observe(image)
    observer.observe(image);
}