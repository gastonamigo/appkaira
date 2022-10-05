class list {
    constructor(id, nombre, precio, imagen, cantidad) {
        this.id = id;
        this.name = nombre;
        this.price = precio;
        this.img = imagen;
        this.stock = cantidad;
    }
}
const products = []

products.push(new list(1, "Ender 3 v2", 55000, "/Images/ender-3-V2-01.jpg",5));
products.push(new list(2, "Ender 2 pro", 45000, "/Images/ender2pro1.png",5));
products.push(new list(3, "Cr10 pro v2", 95000, "/Images/creality-cr-10-smart-pro-1.jpg",5));
products.push(new list(4, "Cr5 pro", 125000, "/Images/cr5pro1.jpg",5));

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}


