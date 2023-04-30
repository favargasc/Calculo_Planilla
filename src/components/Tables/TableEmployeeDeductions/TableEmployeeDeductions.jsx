import React, { useState, useEffect } from 'react'
import TableBase from '../TableBase/TableBase.jsx'
import getEmployeeDeduction from '../../../api/implementations/getEmployeeDeductions/getEmployeeDeductions.js'

import './TableEmployeeDeductions.style.css'

const TableEmployeeDeductions = ({}) => {

  const data = [
    {
        "Period": "monthly",
        "Status": true,
        "Id": 1,
        "Concept": "CCSS",
        "Percentage": 9.67,
        "EffectiveDate": "2022-01-01",
        "ExpirationDate": "2023-12-31"
    },
    {
        "Period": "monthly",
        "Status": true,
        "Id": 2,
        "Concept": "Banco Popular",
        "Percentage": 1,
        "EffectiveDate": "2022-01-01",
        "ExpirationDate": "2023-12-31"
    },
    {
        "Period": "monthly",
        "Status": true,
        "Id": 3,
        "Concept": "Asoc. Solidarista",
        "Percentage": 5,
        "EffectiveDate": "2022-01-01",
        "ExpirationDate": "2023-12-31"
    }
]

  useEffect(() => {
    getEmployeeDeduction()
  })
  
  return (
    <TableBase data={data} />
  )
}

export default TableEmployeeDeductions
