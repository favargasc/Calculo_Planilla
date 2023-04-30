import React from 'react'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx'

import './App.css'

function App() {

  return (
    <div>
      <Header>
        <label className='lbl-header'> Cálculo de Impuestos 2023</label>
      </Header>
      <Home/>
    </div>
      

  )
}

export default App
