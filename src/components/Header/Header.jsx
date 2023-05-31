import React, { useState, useEffect } from 'react'
import Modal from '../../modals/ModalOptions/ModalOptions'
import Dropdown from '../Dropdown/Dropdown'
import Spinner from '../Spinner/Spinner'
import getEmployeeDeduction from '../../api/implementations/getEmployeeDeductions/getEmployeeDeductions'
import getEmployeerDeductions from '../../api/implementations/getEmployeerDeductions/getEmployeerDeductions'
import updateData from '../../api/implementations/updateData/UpdateData'

import './Header.style.css'

const Header = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [date, setDate] = useState('')

  const [optionsEmployeeDeductions, setOptionsEmployeeDeductions] = useState([])
  const [optionsEmployeerDeductions, setOptionsEmployeerDeductions] = useState([])

  const handleModal = () => {
    setIsOpen(!isOpen) 
  } 

  const handleUpdate = () => {
    setLoading(true)
    updateData({
      setLoading,
      getDate
    })
  }

  const getDate = () => {
    const fechaActual = new Date()
    const dia = fechaActual.getDate()
    const mes = fechaActual.getMonth() + 1
    const anio = fechaActual.getFullYear()
    const hora = fechaActual.getHours()
    const minutos = fechaActual.getMinutes()
    setDate(dia + '/' + mes + '/' + anio + ' ' + hora + ':' + minutos)
  }

  useEffect(() => {
    getEmployeeDeduction({
      'setData': setOptionsEmployeeDeductions
    })
    getEmployeerDeductions({
      'setData': setOptionsEmployeerDeductions
    })
    getDate()
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
        <button 
          className='btn-settings' 
          onClick={handleUpdate}
          disabled={loading}
        >
            ACTUALIZAR
        </button>
        {
          loading  ?
            <div className='wait-container'>
              <Spinner/>
              <h5 style={{ color: '#8d9b8d'}}>Por Favor espere a que finalice la actualización.</h5>
            </div>
          :
            <div className='date'>
              <h5 style={{ color: '#8d9b8d'}}>Última actualización:</h5>
              <h5 style={{ color: '#8d9b8d'}}>{date}</h5>
            </div>
        }
      </nav>
    </header>
  )
}

export default Header
