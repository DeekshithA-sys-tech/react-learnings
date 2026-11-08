import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [count , setCount] = useState(0)
  const[desc,setDesc] = useState(100)
  const increment = ()=>{
    setCount((count)=>count+1)
  }
  const decrement=()=>{
    setDesc((decs)=>desc-1)
  }
  useEffect(()=>{
    console.log(`Increment rendered`)
  },[count,desc])
  
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>increase</button>
      <h2>{desc}</h2>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default UseEffect
