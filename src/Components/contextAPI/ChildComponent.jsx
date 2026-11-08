import React, { useContext, useEffect, useState } from 'react'
import {placeholderData} from './FetchAPI'
const ChildComponent = () => {
    let [data , setapidata]=useState([])
    let apidata = useContext(placeholderData)
    useEffect(()=>{
        setapidata(apidata)
    },[])
    // console.log(apidata)
    
  return (
    <div>
      <h1>im on child component</h1>
      {
        data.map((ele)=>{
            let {title,body} = ele
            console.log(title)
            return(
                <div>
                    <h3>{title}</h3>
                    <h6>{body}</h6>
                    
                </div>
            )
        })
      }
      
    </div>
  )
}

export default ChildComponent