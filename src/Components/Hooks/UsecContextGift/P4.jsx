import React, { useContext } from 'react'
import { Gift } from './P1'

const P4 = () => {
    const {title , model,discription,img} = useContext(Gift)

    return (                              
    <div>
      <h1 style={{color:'red'}}>P 4 : DINGI likes {title} {model}mobile</h1>
      <div style={{border:"2px solid black",width:"400px",margin:"auto"}}>
        <h1>Company : {title}</h1>
      <h3>Model : {model}</h3>
      <img src={img} alt="" />
      <h3>Description : {discription}</h3>
      
      </div>

    </div>
  )
}

export default P4
