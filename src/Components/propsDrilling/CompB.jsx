import React from 'react'
import CompC from './compC'
const CompB = ({numA}) => {
  return (
    <div>
      {/* <h1>Component B</h1> */}
      <CompC numB = {numA}/>
    
    </div>
  )
}

export default CompB
