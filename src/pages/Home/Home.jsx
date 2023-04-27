import React, { useState } from 'react'
import TableEmployee from '../../components/Tables/TableEmployee/TableEmployee'

import './Home.style.css'

const Home = ({ }) => {
  return (
    <div className='home-container'>
      <div className='container-table'>
        <TableEmployee/>
      </div>
    
  </div>
  ) 
}

export default Home
