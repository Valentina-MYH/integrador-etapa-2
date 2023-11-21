import React from 'react'
import './style.css'
const Contacto = () => {
  return (
    <div className='contacto-main'>
    <h3>Contacto</h3>

        <form className="form"id="form">
            <h2 id="validationSummary"> Contacto</h2>
            
            <div className="grupo" id="grupo-nom">
                <input className="formFields" type="text" name="name" id="name" />
                <label  className="label" htmlFor="name">Nombre</label>
            </div>

            <div className="grupo" id="grupo-apellido">
                <input className="formFields" type="text" name="apellido" id="apellido"/>
                <label  className="label" htmlFor="apellido">Apellido</label>
            </div>
            
            <div className="grupo" id="grupo-mail">
                <input type="text" className="formFields" name="email" id="email" />
                <label className="label" htmlFor="email">Mail</label>
            </div>

            <div className="grupo" id="grupo-asunto">
                <select name="asunto"> 
                    <option value="sell"> Venta de vela/s </option>
                    <option value="buy">Compra de vela/s</option>
                    <option value="general">Otra..</option>
                </select>

            </div>
            <div className="grupo" id="grupo-mensaje">
                <textarea className="formFields" name="mensaje" cols="30" rows="10" placeholder="Ingrese su mensaje"></textarea>
            </div>
            
            <div className="boton">
                <button className="formFields" type="submit">Enviar</button>
            </div>

            <div className="msj" id="msj">
				      <p><b>Error:</b> Por favor rellena el formulario correctamente. </p>
			      </div>

      </form>

    </div>
  )
}

export default Contacto