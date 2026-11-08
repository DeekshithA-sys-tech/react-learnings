import React from 'react'
import { std_Data } from './StdData'
import BE_students from './BE_students'
import BCA_students from './BCA_students'
import BSC_students from './BSC_students'
const StdDtabase = () => {
    
    let BE=std_Data.filter((e)=>{
        return e.degree==='BE'
    })
    let BSC=std_Data.filter((e)=>{
        return e.degree==='BSC'
    })
    let BCA=std_Data.filter((e)=>{
        return e.degree==='BCA'
    })
  return (
    <div>

      <h1>Students Database</h1>

      <BE_students BE ={BE}/>
      <BCA_students BCA={BCA}/>
      <BSC_students BSC={BSC}/> 
    </div>
  )
}

export default StdDtabase
