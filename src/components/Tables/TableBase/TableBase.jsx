import React from 'react'

import './TableBase.style.css'

const TableBase = ({ data }) => {

    const headings = []
    Object.keys(data[1]).map((head) => {
      headings.push(head.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/\d+/g, " $&")) // Agregar espacios
    })
    
    return (
      <table className='table table-bordered'>
      <thead>
        <tr>
          {
            headings.map(heading => <th>{heading}</th>)
          }
        </tr>
      </thead>
      <tbody>
      {data.map((item, index) => (
        <tr key={index}>
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
