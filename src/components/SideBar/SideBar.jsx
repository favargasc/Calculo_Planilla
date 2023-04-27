import React, { useState } from 'react'
import { Constants } from '../../constans/Constants.jsx'
import { Colors } from '../../constans/Colors.jsx'

import './SideBar.style.css'

const SideBar = ({ onChange }) => {

  const [selectedOption, setSelectedOptionState] = useState(
    Constants.sideBarOptions[0].text
  )

  const setSelectedOption = (option) => {
    onChange(option)
    setSelectedOptionState(option)
  }

  return ( 
    <div className='side-menu'>
      <div className='main-menu'>
        <ul>
          {
            Constants.sideBarOptions.map((element, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setSelectedOption(element.text)}
                >
                  <div className='menu-item'>
                    <span
                      className='h7 item-text'
                      style={{ color: selectedOption === element.text ? Colors.business : Colors.text2 }}
                    >
                      {element.text}
                    </span>
                  </div>

                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )


}

export default SideBar
