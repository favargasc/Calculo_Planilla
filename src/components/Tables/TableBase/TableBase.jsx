import React, { useState, useEffect } from 'react'

import './TableBase.style.css'

const TableBase = ({ data }) => {

    const headings = Object.keys(data[1])
    const [selectedRows, setSelectedRows] = useState([])
    const [selectAll, setSelectAll] = useState([])

    const handleSelectAll = (event) => {
      if (event.target.checked) {
        setSelectedRows(Array.from({ length: data.length }, (_, index) => index)) 
        setSelectAll(true) 
      } else {
        setSelectedRows([]) 
        setSelectAll(false) 
      }
    } 

    const handleSelectOne = (event, index) => {
      if (event.target.checked) {
        setSelectedRows([...selectedRows, index]);
      } else {
        setSelectedRows(selectedRows.filter((i) => i !== index));
      }
    };
    
    return (
      <table className='table table-bordered'>
      <thead>
        <tr>
        <th>
          <input type="checkbox" onChange={handleSelectAll} checked={selectAll} />
        </th>
          {
            headings.map(heading => <th>{heading}</th>)
          }
        </tr>
      </thead>
      <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td>
            <input
              type="checkbox"
              checked={selectedRows.includes(index)}
              onChange={(event) => handleSelectOne(event, index)}
            />
          </td>
          {Object.values(item).map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      ))}
    </tbody>
    </table>
    )
  }
  

export default TableBase
