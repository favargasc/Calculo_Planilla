import React, { useState } from 'react'
import Modal from '../../modals/ModalOptions/ModalOptions'
import Dropdown from '../Dropdown/Dropdown'

import './Header.style.css'

const Header = ({ title, children }) => {

  const [isOpen, setIsOpen] = useState(false)

  const options = ['Option 1', 'Option 2', 'Option 3']

  const handleModal = () => {
    setIsOpen(!isOpen) 
  } 

  return (
    <header className='header'>
      <nav className='nav'>
        {children}
        <button className='btn-settings' onClick={handleModal}>CONFIGURACIÓN</button>
        <Modal isOpen={isOpen} onClose={handleModal}>
        <Dropdown title={'DEDUCCIONES OBRERAS'} options={options} />
        <hr/>
        <Dropdown title={'DEDUCCIONES PATRONALES'} options={options} />
      </Modal>
      </nav>
    </header>
  )
}

export default Header
