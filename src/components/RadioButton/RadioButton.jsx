import React, { useState } from 'react' 

import './RadioButton.style.css'

const RadioButton = ({ name, options, selectedOption, setSelectedOption }) => {

  function handleOptionChange(event) {
    setSelectedOption(event.target.value) 
  }

  return (
    <div className='radio-btn'>
      <label className='lbl-radio-btn' >{name}</label>  
      <div className='container-options'>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={option.value}
              name={name}
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleOptionChange}
            />
            <label className='option-radio-btn' htmlFor={option.value}>{option.label}</label>
          </div>
        ))}      
      </div>  
    </div>
  ) 
}

export default RadioButton 
