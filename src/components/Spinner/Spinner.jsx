import React from "react"

import './Spinner.style.css'

const Spinner = () => {
  const divs = Array.from({ length: 12 }, (_, index) => <div key={index}></div>)

  return (
    <div className="loadingio-spinner-spinner-4ke376ejfy">
      <div className="ldio-8qb3eawencd">
        {divs}
      </div>
    </div>
  )
}

export default Spinner
