import React from 'react'
import Child from './Child'

const Parent = () => {
    let fname='ram'
  return (
    <div>
      <h1>parent component</h1>
      <Child fname={fname} n1='100'/> 
    </div>
  )
}

export default Parent
