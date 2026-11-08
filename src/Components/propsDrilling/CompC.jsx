import React from 'react'
import CompD from './compD'
const CompC = ({numB}) => {
  return (
    <div>
      {/* <h1>Component C</h1> */}
      <CompD numC = {numB}/>
    </div>
  )
}

export default CompC
