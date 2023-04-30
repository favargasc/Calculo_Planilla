import React, { useState, useEffect } from 'react'
import TableBase from '../TableBase/TableBase.jsx'
import getEmployeesData from '../../../api/implementations/getEmployeesData/getEmployeesData.js'
import getEmployeerDeductions from '../../../api/implementations/getEmployeerDeductions/getEmployeerDeductions.js'

import './TableEmployeerDeductions.style.css'

const TableEmployeerDeductions = ({}) => {

  const data = [
    {
        "Period": "monthly",
        "Status": true,
        "Id": 4,
        "Concept": "Aguinaldo",
        "Percentage": 8.33,
        "EffectiveDate": "2022-01-01",
        "ExpirationDate": "2023-12-31"
    },
    {
        "Period": "monthly",
        "Status": true,
        "Id": 5,
        "Concept": "Cesantía",
        "Percentage": 6.33,
        "EffectiveDate": "2022-01-01",
        "ExpirationDate": "2023-12-31"
    },
    {
        "Period": "monthly",
        "Status": true,
        "Id": 6,
        "Concept": "Vacaciones",
        "Percentage": 4.16,
        "EffectiveDate": "2022-01-01",
        "ExpirationDate": "2023-12-31"
    },
    {
        "Period": "monthly",
        "Status": true,
        "Id": 7,
        "Concept": "INS",
        "Percentage": 1.5,
        "EffectiveDate": "2022-01-01",
        "ExpirationDate": "2023-12-31"
    },
    {
        "Period": "monthly",
        "Status": true,
        "Id": 8,
        "Concept": "CCSS",
        "Percentage": 24,
        "EffectiveDate": "2022-01-01",
        "ExpirationDate": "2023-12-31"
    }    
  ]

  useEffect(() => {
    getEmployeerDeductions()
  })
  
  return (
    <TableBase data={data} />
  )
}

export default TableEmployeerDeductions
