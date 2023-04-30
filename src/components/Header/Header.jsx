import React, { useState, useEffect } from 'react'
import Modal from '../../modals/ModalOptions/ModalOptions'
import Dropdown from '../Dropdown/Dropdown'
import getEmployeeDeduction from '../../api/implementations/getEmployeeDeductions/getEmployeeDeductions'
import getEmployeerDeductions from '../../api/implementations/getEmployeerDeductions/getEmployeerDeductions'

import './Header.style.css'

const Header = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)

  const [optionsEmployeeDeductions, setOptionsEmployeeDeductions] = useState([])
  const [optionsEmployeerDeductions, setOptionsEmployeerDeductions] = useState([])

  const handleModal = () => {
    setIsOpen(!isOpen) 
  } 

  useEffect(() => {
    getEmployeeDeduction({
      'setData': setOptionsEmployeeDeductions
    })
    getEmployeerDeductions({
      'setData': setOptionsEmployeerDeductions
    })
  }, [])  

  return (
    <header className='header'>
      <nav className='nav'>
        {children}
        <button className='btn-settings' onClick={handleModal}>DEDUCCIONES</button>
        <Modal isOpen={isOpen} onClose={handleModal}>
        <Dropdown title={'DEDUCCIONES OBRERAS'} options={optionsEmployeeDeductions} />
        <hr/>
        <Dropdown title={'DEDUCCIONES PATRONALES'} options={optionsEmployeerDeductions} />
      </Modal>
      </nav>
    </header>
  )
}

export default Header
