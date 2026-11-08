import React from 'react'
import CompB from './CompB'

const CompA = () => {
    let obj1 ={
        name:"dinga",
        degree:"BE",
        AGE:20
    }
  return (
    <div>
      <h1>first object</h1>
      <CompB obj1={obj1}/>
    </div>
  )
}

export default CompA
