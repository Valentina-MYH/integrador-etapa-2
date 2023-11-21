import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Alta from "./Pages/Alta/Alta"
import Contacto from "./Pages/Contacto/Contacto"
import Nosotros from "./Pages/Nosotros/Nosotros"
import ErrorPage404 from "./Pages/ErrorPage404"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { useEffect, useState } from "react"
import ProductList from "./components/ProductList/ProductList"

import CartProvider from "./context/CartContext"

const App = () => {
  const [ products, setProducts ] = useState([])
  const [ error, setError ] = useState(false)
  const [ isLoading, setIsLoading ] = useState(true)
  useEffect(()=> {
    fetchProductsData()
  }, [])
    const fetchProductsData = async () => {
    const url = 'https://653ff79445bedb25bfc18468.mockapi.io/api/products-candles'
    
    try{
      
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      serIsLoading(false)
    }catch (error){
      setError(true)

    }
    if ( error ) return <p>Hubo un error al cargar los productos</p>
    if ( isLoading ) return <p>Cargando...</p>
    

  }
  return (
    <>
    <CartProvider>
      
    {  products.length > 0 ? (
    <ProductList products={products} fetchProductsData /> 
      ): ( <p>No hay productos para mostrar</p> )
    }
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/alta' element={<Alta/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>
      <Route path='*' element={<ErrorPage404/>}/>
    </Routes>
    <Footer/>
    </CartProvider>
    
    
    </>
  
  )
}

export default App
