import React, { useContext, useState } from 'react'
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { FaXmark} from "react-icons/fa6";
import { CartContext } from '../../context/CartContext';

const CartButton = () => {
    const {cart, removeCart} = useContext(CartContext)
    const [isOpen, setIsOpen] = useState(false)
    const toggleCart=()=>{
        setIsOpen(prevState => !prevState)
    } 
  return (
    <>
        <button className='cart-button' onClick={toggleCart}> 
            <FaShoppingCart/>
        </button>
        {isOpen && (
            <div className="cart-overlay">
                <div className="cart">
                    <button className="close-button" onClick={toggleCart}>
                        <FaXmark />
                    </button>
                    <h2>Carrito de compras</h2>
                    {cart.length > 0 ? 
                        <ul>
                            {cart.map((productCard) => (
                            <li key={productCard.id}>
                                {productCard.nombre} - ${productCard.precio} - <FaTrash style={{cursos: 'pointer'}} onClick={()=> removeCart(productCard.id)}/>
                                    
                            </li>
                            
                            ))}
                            <br/>

                            <h3>Total: $</h3>
                        </ul>
                        : <p>El carrito está vacío</p>
                        }
                </div>
            </div>
            )}
        
    </>)

}


export default CartButton