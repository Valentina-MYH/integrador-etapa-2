import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const ProductForm = ({fetchData}) => {

    const [productFormValues, setProductFormValues] = useState({
        nombre:'',
        precio:0,
        stock:0,
        marca:'',
        categoria:'',
        descripcion:'',
        envio:'',
        foto:null
    })


    const handleUpdateProductFormValues = (value, inputReference) => {
        if(inputReference === 'nombre'){
            setProductFormValues((prevState=>({...prevState, nombre: value})))
        }
        if(inputReference === 'precio'){
            setProductFormValues((prevState=>({...prevState, precio: value})))
        }
        if(inputReference === 'stock'){
            setProductFormValues((prevState=>({...prevState, stock: value})))
        }
        if(inputReference === 'marca'){
            setProductFormValues((prevState=>({...prevState, marca: value})))
        }
        if(inputReference === 'categoria'){
            setProductFormValues((prevState=>({...prevState, categoria: value})))    
        }
        if(inputReference === 'categoria'){
            setProductFormValues((prevState=>({...prevState, descripcion: value})))    
        }
        if(inputReference === 'foto'){
            setProductFormValues((prevState=>({...prevState, foto: value})))    
        }
    }

    const handleSubmit = async () => {
        try{
            const response = await fetch ('https://653ff79445bedb25bfc18468.mockapi.io/api/products-candles', {
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(productFormValues)})
            
            if(!response.ok){
                throw new Error ('Error al agregar el producto')
            }
            try{
                await fetchData();
            }catch (error){ 
                toast.error('Error al actualizar los datos')
            }
            toast.success('Producto Agregado con exito')
        }catch(error){
            toast.error('Error al agregar los productos')
        }        
     }
    //validacion 
   



  return (
    <div>
        <form id="formulario" onSubmit={handleSubmit}>
            <h1>Alta de Productos</h1>
            <div className="grupo" id="grupo-nombre">
                <label htmlFor="nombre">Nombre:</label>
                <input className="formFields" onChange={(e) => handleUpdateProductFormValues(e.target.value, "nombre" )} type="text" id="nombre" name="nombre" required/>
                <p className="input-error">El Nombre debe contener unicamente letras y el primer caracter debe ser en mayusculas</p>
            </div>
            <div className="grupo" id="grupo-precio">
                <label htmlFor="precio">Precio:</label>
                <input className="formFields" onChange={(e) => handleUpdateProductFormValues(e.target.value, "precio")}type="text" id="precio" name="precio" step="0.01" required/>
                <p className="input-error" >El precio debe obligatoriamente comenzar con el caracter '$' y contener unicamente numeros</p>
            </div>
            <div className="grupo" id="grupo-stock">a
                <label htmlFor="stock">Stock:</label>
                <input className="formFields" onChange={(e) => handleUpdateProductFormValues(e.target.value, "stock")} type="number" id="stock" name="stock" required/>
                <p className="input-error" >El stock debe contener unicamente numeros</p>
            </div>
            <div className="grupo" id="grupo-marca">
                <label htmlFor="marca">Marca:</label>
                <input className="formFields" onChange={(e) => handleUpdateProductFormValues(e.target.value, "marca" )} type="text" id="marca" name="marca" required/>
                <p className="input-error">La marca puede tener letras, numeros y signos</p>
            </div>
            <div className="grupo" id="grupo-categoria">
                <label htmlFor="categoria">Categoría:</label>
                <input className="formFields" onChange={(e) => handleUpdateProductFormValues(e.target.value, "categoria" )} type="text" id="categoria" name="categoria" required/>
                <p className="input-error" >Categoria debe decir una de estas opciones: Nuevo, Casi nuevo o Usado.
                </p>
            </div>
            <div className="grupo" id="grupo-descrip-corta">
                <label htmlFor="descrip">Descripción Corta:</label>
                <textarea className="formFields"  onChange={(e) => handleUpdateProductFormValues(e.target.value, "descripcion" )} id="descripcion" name="descripcion" rows="3" required></textarea>
                <p className="input-error" >La descripcion corta debe contener de 1 a 50 caracteres</p>
            </div> 
            <div className="grupo" id="grupo-descrip-larga">
                <label htmlFor="descrip-larga">Descripción Larga:</label>
                <textarea className="formFields"  id="descrip-larga" name="descrip-larga" rows="6" required></textarea>
                <p className="input-error" >La descripcion larga debe contener de 50 a 100 caracteres.</p>    
            
            </div> 
            <div className="grupo" id="grupo-envio-gratis">
                <label htmlFor="envio-gratis">Envío sin Cargo:</label>
                <input type="checkbox" id="envio-gratis" name="envio-gratis"/>
                
            </div> 
            <div className="grupo" id="grupo-edad-desde">
              <label htmlFor="edad-desde">Edad Desde:</label>
              <input type="text" id="edad-desde" name="edad-desde"/>
              <p className="input-error" >La edad desde debe tener formato fecha: 'XX/XX/XXXX'</p>
            </div> 
            <div className="grupo" id="grupo-edad-hasta">
              <label htmlFor="edad-hasta">Edad Hasta:</label>
              <input   type="text" id="edad-hasta" name="edad-hasta"/>
              <p className="input-error" >La edad hasta debe tener formato fecha: 'XX/XX/XXXX'</p>
            </div>
            <div className="grupo" id="grupo-foto">
              <label htmlFor="foto">Foto:</label>
              <input type="file" id="foto" name="foto" accept="image/*" onChange={(e) => handleUpdateProductFormValues(e.target.value, "foto" )}/>           
              <p className="input-error" >Seleccione foto del producto</p>
            </div>  

            <div className="mensaje" id="mensaje">
				<p><b>Error:</b> Por favor rellena el formulario correctamente. </p>
			</div>


            <div className="button-enviar">
                <button onClick={handleSubmit} className="formFields"  type="submit">Agregar Producto</button>
                <p className="mensaje-exito">Formulario enviado exitosamente!</p>
            </div>
              
        </form>
        
        <ToastContainer/>
        
    </div>
  )
}

export default ProductForm