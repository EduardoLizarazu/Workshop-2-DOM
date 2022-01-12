
// Me dice si hay una interseccion
const isIntersecting = entry => {
    // isIntersection es una propiedad que retorna un boleano
        // true -> dentro de la pantalla
    return entry.isIntersecting
}

const action = entry => {
    const node = entry.target; // obtener el nodo
    console.log("Hello!");

    // des resgistra la imagen (unlisten)
    observer.unobserve(node)
}

// Recibe una accion o funcion donde vamos a especificar que hacer por imagen
// Me va a paser TODAS LAS ENTRADAS que en ese momento esta escuchando
const observer = new IntersectionObserver( entries => {
    entries
        .filter(isIntersecting)
        .forEach(action)
})

/**
 * 1. Crear una funcion que resiva una imagen y que me la observe
 */
export const registerImage = image => {
    // Intersection Observe -> observe(image)
    observer.observe(image);
}