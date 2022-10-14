import { useState, createContext } from "react";
export const CartContext = createContext()
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])

    const addItem = (productToAdd) => {
        console.log('additem')
        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        }else{
            console.log('ya esta en el carrito')
        }
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart (cartWithoutProduct)
    }

    return(
        <CartContext.provider value={{ cart, addItem, removeItem}}>
            {children}
        </CartContext.provider>

    )
}