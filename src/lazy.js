// Is intersecting ?
const isIntersecting = entry => {
        // true -> dentro de la pantalla
    return entry.isIntersecting
}

const loadImage = entry => {
    // put the src to render img
    const container = entry.target;
    const image = container.firstChild 
    const url = image.dataset.src;
    image.src = url;

    observer.unobserve(container) // unobserve
}

const observer = new IntersectionObserver( entries => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})

export const registerImage = image => {
    // Intersection Observe -> observe(image)
    observer.observe(image);
}