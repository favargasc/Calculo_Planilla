import React from 'react'

import './TableBase.style.css'

const TableBase = ({ headings, data }) => {
    
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
