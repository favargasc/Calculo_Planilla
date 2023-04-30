import React, { useState } from 'react'
import HomeScreenLayout from './layouts/homeScreenLayout.jsx'
import SideBar from './components/SideBar/SideBar.jsx'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx'

import './App.css'

function App() {

  const [screen, setScreen] = useState('Home')
  
  const navigate = (screen) => {
    switch (screen) {
      case 'Home':
        return <Home/>
      case 'Taxes':
        return <div>TAXES</div>
      case 'Employees':
        return <div>Employees</div>
      default:
        return <div>HOME</div>
    }
  }

  return (
    <div>
      <Header>
        <label> Cálculo de Impuestos 2023</label>
      </Header>
      <Home/>
    </div>
      

  )
}

export default App
