import React from 'react'
import { Link } from 'react-router-dom'
import Alta from '../../Pages/Alta/Alta'
import Contacto from '../../Pages/Contacto/Contacto'
import Nosotros from '../../Pages/Nosotros/Nosotros'
import Home from '../../Pages/Home/Home'
import log from '../../assets/img/log.jpeg'


import './Header.css'
import CartButton from '../CartButton/CartButton'


const Header = () => {

  return (    
    <div className='Header'>
      <div className="logo">
        <img src={log} id="logo" alt="imagen" style={{ width: '100px' }} />
      
      </div><h2>Mila’s CANDLES</h2>
      
      <div className='navbar'>
        <ul id="nav-menu">
            <li><Link className="Link"to={"/"} element={<Home/>}>Home</Link></li>
            <li><Link className="Link"to={"/alta"} element={<Alta/>}>Update</Link></li>
            <li><Link className="Link"to={"/contacto"} element={<Contacto/>}>Contacto</Link></li>
            <li><Link className="Link"to={"/nosotros"} element={<Nosotros/>}>Sobre Nosotros</Link></li>
        </ul>
      </div>
      <div className="carrito-compras">
        <CartButton/>
      </div>
      
        
      

      
        
    </div>
  )
  
}

export default Header