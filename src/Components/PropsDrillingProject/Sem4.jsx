import React from 'react'
import Sem3 from './Sem3'
const Sem4 = ({year3}) => {
    let year4 = (year3 + 85.6)/2
  return (
    <div>
      <h1>4th Year Result</h1>
      <h3>SGPA : {year4}</h3>
      
    </div>
  )
}

export default Sem4
