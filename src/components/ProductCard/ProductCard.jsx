import React, {useContext, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaRegTrashAlt, FaShoppingCart} from "react-icons/fa";
import { CartContext } from '../../context/CartContext';


const ProductCard = ({ product, fetchProductsData}) => {
  const {addToCart} = useContext(CartContext);

  const [isDeleteLoading, setIsDeleteLoading] = useState(false)
  const handleDelete = async (id) => {
    try {
      setIsDeleteLoading(true);
       const response = await fetch(
        `https://653ff79445bedb25bfc18468.mockapi.io/api/products-candles/${id}`, 
      {
        method: "DELETE",
      });
    if(!response.ok) throw new Error ('El producto no se pudo eliminar')
    toast.success('Producto eliminado con exito')
    } catch (error) {
      toast.error('el producto no se pudo eliminar')
      fetchProductsData();
      setIsDeleteLoading(false)
    }


  }
  return (
    <div className='product-card'>
      {isDeleteLoading ? 
      (<p>Eliminando Producto....</p> 
      ) : (
        <>
        
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Precio: {product.price}</p>
        <button>Agregar al carrito</button>
        <button onClick={()=>addToCart(product.id)}><FaShoppingCart /> Agregar</button>
        <button onClick={()=>handleDelete(product.id)}><FaRegTrashAlt /> Eliminar</button>
        </>
        
      )}
      <ToastContainer/>
    </div>
  )
}

export default ProductCard