import React from 'react'

const CompC = ({arr}) => {
    let obj3={
        
        name:"dingu",
        degree:"BE",
        AGE:20
    }
   
    let arr1 =[obj3,...arr]
    console.log(arr1)
    
  return (
    <div>
      {
        arr1.map((e)=>{
            // console.log(e)
            
                return(
                <>
                <h1>{e.name}</h1>
                <h1>{e.degree}</h1>
                <h1>{e.AGE}</h1>
                </>
                )
            })
        }
      
    </div>
  )
}

export default CompC
