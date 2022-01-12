
// Me dice si hay una interseccion
const isIntersecting = entry => {
    // isIntersection es una propiedad que retorna un boleano
        // true -> dentro de la pantalla
    return entry.isIntersecting
}

const loadImage = entry => {
    // obtener el nodo (div), ya que es lo qeu estoy devolviendo en la funcion createImageNode
    const container = entry.target; 

    // para obtener la imaen del container le pido que me de el atributo img, ya que es un nodo, pero como la imagen es la unica que hay pudo aplicar un fistChild. Esto para evitar tener que buscar
    // const image = container.querySelector("img");
    const image = container.firstChild
    const url = image.dataset.src;

    // load img
    image.src = url;
 
    // image.src = `https://randomfox.ca/images/${random()}.jpg`;

    // des resgistra la imagen (unlisten)
    observer.unobserve(container)
}

// Recibe una accion o funcion donde vamos a especificar que hacer por imagen
// Me va a paser TODAS LAS ENTRADAS que en ese momento esta escuchando
const observer = new IntersectionObserver( entries => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})

/**
 * 1. Crear una funcion que resiva una imagen y que me la observe
 */
export const registerImage = image => {
    // Intersection Observe -> observe(image)
    observer.observe(image);
}