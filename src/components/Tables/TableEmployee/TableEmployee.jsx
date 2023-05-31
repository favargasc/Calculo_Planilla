import React, { useState, useEffect } from 'react'
import TableBase from '../TableBase/TableBase.jsx'
import getEmployeesData from '../../../api/implementations/getEmployeesData/getEmployeesData.js'
import RadioButton from '../../RadioButton/RadioButton.jsx'
import getDepartaments from '../../../api/implementations/getDepartaments/getDepartaments.js'
import getOrganizations from '../../../api/implementations/getOrganizations/getOrganizations.js'
import { Constants } from '../../../constans/Constants.jsx'

import './TableEmployee.style.css'

const TableEmployee = ({}) => {

  const [data, setData] = useState([])
  const [departaments, setDepartaments] = useState([])
  const [selectedDto, setSelectedDto] = useState(1) 
  const [organizations, setOrganizations] = useState([])
  const [selectedOrg, setSelectedOrg] = useState(1) 

  useEffect(() => {
    getDepartaments({
      setDepartaments
    })
    getOrganizations({
      setOrganizations
    })
  }, [])

  useEffect(() => {
    getEmployeesData({
      numDto: selectedDto,
      numOrg: selectedOrg,
      setData
    })
  }, [selectedOrg, selectedDto])
  
  return (
    <div>
      <RadioButton 
        name={'Lista de Departamentos'} 
        options={departaments} 
        selectedOption={selectedDto} 
        setSelectedOption={setSelectedDto} />
      <RadioButton 
        name={'Lista de Organizaciones'} 
        options={organizations} 
        selectedOption={selectedOrg} 
        setSelectedOption={setSelectedOrg} />
      { 
        data.length == 0 ? 
          null 
        : 
          <div>
            <label className='lbl-header'>Información de los Empleados</label>
            <TableBase data={data} headings={Constants.headersEmployeeTable} />
          </div> 
      }
    </div>
  )
}

export default TableEmployee
