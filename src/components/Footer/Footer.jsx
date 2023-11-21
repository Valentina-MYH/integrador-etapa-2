import React from 'react'
import { Link } from 'react-router-dom'
import log from '../../assets/img/log.jpeg'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className="Footer">
        <div className="conteiner">
            <div className="footer-logo">
                <Link><img src={log} alt="logo-footer" className="logo-footer" style={{ width: '100px' }}/></Link>
            </div>
            <div className="lorem">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nesciunt fugit voluptates esse doloremque exercitationem, labore, repudiandae possimus sapi</p>
            </div>
            <div className="contacto">
                <ul>
                    <Link><i className="fa-brands fa-facebook" ></i></Link>
                    <Link><i className="fa-brands fa-twitter" ></i></Link>
                    <Link><i className="fa-brands fa-instagram" ></i></Link>
                </ul>
            </div>
        </div>
    </div>
    </>
   
  )
}
/** style={{color: #d6d6d6}}></i>*/
export default Footer