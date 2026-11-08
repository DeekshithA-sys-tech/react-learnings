import React from 'react'
import CompC from './CompC'

const CompB = ({obj1}) => {
    let obj2 ={
        
        name:"dingi",
        degree:"BE",
        AGE:20,
        
    }
    let arr=[obj2,obj1]
    
  
  return (
    <div>
      <CompC arr={arr}/>
    </div >
  )
}

export default CompB
