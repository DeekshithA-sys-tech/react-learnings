import React from 'react'
import CompB from './compB'
const CompA = () => {
    const numA = 100
  return (
    <div>
      {/* <h1>Component A</h1> */}
      <CompB numA={numA}/>
    </div>
  )
}

export default CompA
