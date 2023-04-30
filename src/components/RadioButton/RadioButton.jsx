import React from 'react' 

import './RadioButton.style.css'

const RadioButton = ({ name, options, selectedOption, setSelectedOption }) => {

  function handleOptionChange(id) {
    setSelectedOption(id) 
  }

  return (
    <div className='radio-btn'>
      <div className='container-lbl'>
        <label className='lbl-radio-btn' >{name}</label>  
      </div>
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
