import React from 'react'
import Sem2 from './Sem2'

const Sem1 = () => {
    let year1 = 70.9
  return (
    <div>
      <h1>1st Year Result</h1>
      <h3>SGPA : {year1}</h3>
      <Sem2 year1={year1}/>
    </div>
  )
}

export default Sem1
