import React from 'react'
import Sem4 from './Sem4'
const Sem3 = ({year2}) => {
    let year3 = (year2+80.3)/2
  return (
    <div>
      <h1>3rd Year Result</h1>
      <h3>SGPA  : {year3}</h3>
      <Sem4 year3={year3}/>
    </div>
  )
}

export default Sem3
