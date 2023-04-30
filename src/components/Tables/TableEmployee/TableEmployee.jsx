import React, { useState, useEffect } from 'react'
import TableBase from '../TableBase/TableBase.jsx'
import getEmployeesData from '../../../api/implementations/getEmployeesData/getEmployeesData.js'
import RadioButton from '../../RadioButton/RadioButton.jsx'

import './TableEmployee.style.css'

const TableEmployee = ({}) => {

  const [data, setData] = useState([])

  const [selectedOption, setSelectedOption] = useState(null) 
  
  const options = [
    { value: 'option1', label: 'Opción 1' },
    { value: 'option2', label: 'Opción 2' },
    { value: 'option3', label: 'Opción 3' },
    { value: 'option4', label: 'Opción 4' },
    { value: 'option5', label: 'Opción 5' },
    { value: 'option6', label: 'Opción 6' },
    { value: 'option7', label: 'Opción 7' },
    { value: 'option8', label: 'Opción 8' },
    { value: 'option9', label: 'Opción 9' },
    { value: 'option10', label: 'Opción 10' },
    { value: 'option11', label: 'Opción 11' },
    { value: 'option12', label: 'Opción 12' },
    { value: 'option13', label: 'Opción 13' },
    { value: 'option14', label: 'Opción 14' },
    { value: 'option15', label: 'Opción 15' },
    { value: 'option16', label: 'Opción 16' },
    { value: 'option17', label: 'Opción 17' },
    { value: 'option18', label: 'Opción 18' },
  ]

  useEffect(() => {
    getEmployeesData({
      numDto: 10,
      numOrg: 20,
      setData
    })
  }, [])
  
  return (
    <div>
      <RadioButton name={'Lista de Departamentos'} options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <RadioButton name={'Lista de Organizaciones'} options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      { data.length == 0 ? null : <TableBase data={data} /> }
    </div>
  )
}

export default TableEmployee
