import React, { useState } from 'react' 

import './RadioButton.style.css'

const RadioButton = ({ name, options, selectedOption, setSelectedOption }) => {

  function handleOptionChange(id) {
    console.log('event.target.Id: ', id)
    setSelectedOption(id) 
  }

  return (
    <div className='radio-btn'>
      <label className='lbl-radio-btn' >{name}</label>  
      <div className='container-options'>
        {options.map((option, index) => (
          <div key={index} className='radio-option'>
            <input
              type="radio"
              id={option.Id}
              name={name}
              Id={option.Id}
              checked={selectedOption === option.Id}
              onChange={() => handleOptionChange(option.Id)}
            />
            <label className='option-radio-btn' htmlFor={option.Id}>{option.Name}</label>
          </div>
        ))}      
      </div>  
    </div>
  ) 
}

export default RadioButton 
