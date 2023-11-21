import {createContext, useState } from 'react'
export const CartContext = createContext();
const CartProvider = ({children}) => {
  
    const [cart, setCart] = useState ([]);
    const addToCart = (product) => {

        setCart((prevState) => [...prevState, product])
        //AGREGAR EL PRODUCTO MAS D EUNA VEZ
    }
    const removeCart = (productId) =>{
        const newCart = cart.filter(productCart => productCart.id !== productId)
        setCart(newCart)
    }
  return <CartContext.Provider value={{cart, addToCart, removeCart}}>{children}</CartContext.Provider>
}

export default CartProvider