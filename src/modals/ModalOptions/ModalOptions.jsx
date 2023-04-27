import React from 'react' 

import './ModalOptions.style.css'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null 
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) 
} 

export default Modal 
