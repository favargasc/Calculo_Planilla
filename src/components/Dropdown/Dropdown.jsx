import React, { useState } from 'react' 

import './Dropdown.style.css'

const Dropdown = ({ options, title }) => {
  const [selectedOptions, setSelectedOptions] = useState([]) 

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option)) 
    } else {
      setSelectedOptions([...selectedOptions, option]) 
    }
  } 

  return (
    <div className='dropdown-container'>
      <div className='dropdown-button' aria-labelledby='dropdownMenuButton'>
        <label className='dropdown-title'>{title}</label>
        {options.map((option, index) => (
          <label className='dropdown-item' key={index}>
            <input type='checkbox' className={`${"testing" + index}`} checked={selectedOptions.includes(option)} onChange={() => handleOptionSelect(option)} />
            <span className={`option-text color-${index}`}>{option}</span>
          </label>
        ))}
      </div>
    </div>
  ) 
} 

export default Dropdown 
