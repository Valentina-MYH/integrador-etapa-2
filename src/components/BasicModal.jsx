import React from 'react'
import ReactModal from 'react-modal'
const customStyles={
    top: '50',
    bottom: 'auto',
    witdh: '60%',
    height: '80%', 
    

}
const BasicModal = ({isOpen, setIsOpen}) => {
  const closeModal = () => setIsOpen(false)
    return (
    <ReactModal
    style={customStyles}
    isOpen={isOpren}
   

    >
        <div>
            <div className="modal-header">
                <button onClick={()=>setIsOpen(false)}>x</button>
                <h1>Soy el modal</h1>
            </div>
            
            
            <p>descripcion modal</p>
        </div>
        
        
    </ReactModal>
  )
}

export default BasicModal