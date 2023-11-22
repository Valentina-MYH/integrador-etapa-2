import React, {useContext, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaShoppingCart} from "react-icons/fa";
import { CartContext } from '../../context/CartContext';


const ProductCard = ({ product, fetchProductsData}) => {
  const {addToCart} = useContext(CartContext);
 

  return (
    <div className='product-card'>
      
        <div className='card'>
          <img src={product.foto}/>
          <h2>{product.nombre}</h2>
          <p>{product.descripcion}</p>
          <p>Precio: {product.precio}</p>
          
          <button onClick={() => addToCart(product)}>
            {" "}
            Agregar al carrito 
            <FaShoppingCart />
          </button>
          
        </div>
      
      <ToastContainer/>
    </div>
  )
}

export default ProductCard