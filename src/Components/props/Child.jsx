import React from 'react'

const Child = (props) => {
    let {fname,n1}=props
    console.log(props)
  return (
    <div>
      <h4>child component </h4>
      <h3>{fname} is scored {n1}%</h3>
    </div>
  )
}

export default Child
