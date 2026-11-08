import React, { useEffect } from 'react'

const Child = () => {
    useEffect(()=>{
        console.log("Child component mounted")
        return()=>{
            console.log("Child component unmounted")
        }
    },[])
  return (
    <div>
      <h2>Child Component</h2>
    </div>
  )
}

export default Child
