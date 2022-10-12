class list {
    constructor(id, nombre, precio, categoria, imagen, cantidad, descripcion) {
        this.id = id;
        this.name = nombre;
        this.price = precio;
        this.category = categoria;
        this.img = imagen;
        this.stock = cantidad;
        this.description = descripcion;
    }
}
const products = []

products.push(new list(1, "Ender 3 v2", 55000, "FDM", "/Images/ender-3-V2-01.jpg",5, "Ender 3 v2"));
products.push(new list(2, "Ender 2 pro", 45000, "FDM", "/Images/ender2pro1.png",5,"Ender 2 pro"));
products.push(new list(3, "Cr10 pro v2", 95000, "FDM", "/Images/creality-cr-10-smart-pro-1.jpg",5,"Cr10 pro v2"));
products.push(new list(4, "Cr5 pro", 125000, "FDM", "/Images/cr5pro1.jpg",5,"Cr5 pro"));

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return String(prod.id) === id
            }))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}