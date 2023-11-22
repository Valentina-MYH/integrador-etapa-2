import {createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
export const CartContext = createContext();

const CartProvider = ({children}) => {
  
    const [cart, setCart] = useState ([]);
    useEffect(()=>{
        const cartStorage = localStorage.getItem("cart");
        cartStorage != null && setCart(JSON.parse(cartStorage))
    }, [])
    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart));
    },[cart])
    
    const addToCart = (product) => {
        setCart((prevState) => [...prevState, product])
        toast.success('Agregando al carrito')
        //AGREGAR EL PRODUCTO MAS D EUNA VEZ
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    const removeCart = (productId) =>{
        const newCart = cart.filter(productCart => productCart.id !== productId)
        setCart(newCart)
        toast.error('Eliminando producto del carrito')
    }
  return <CartContext.Provider value={{cart, addToCart, removeCart}}>{children}</CartContext.Provider>
}

export default CartProvider