import React from 'react'

import './homeScreenLayout.style.css'

const HomeScreenLayout = ({ children }) => {
  return (
    <div className='home-screen-layout-container'>
     <div className='home-screen-layout-side-bar'>
        {children[0]}
      </div>
      <div className='home-screen-layout-container-content'>
        <div>
          {children[1]}
        </div>
        <div className='home-screen-layout-content'>
          {children[2]}
        </div>
      </div>
    </div>
  )
}

export default HomeScreenLayout
