import React from 'react'
import Sem3 from './Sem3'
const Sem2 = ({year1}) => {
    let year2 = (year1 + 70.9)/2
    
  return (
    <div>
      <h1>2nd Year Result</h1>
        <h3>SGPA : {year2}</h3>
        <Sem3 year2={year2}/>
    </div>
  )
}

export default Sem2
