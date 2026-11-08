import React, { useState } from 'react'

const CounterApp = () => {
    let [count,setCount]=useState(0)
    let [val,setValue]=useState('')
    let [name,setName]=useState('')
    let [bool , setBool]=useState(true)
   let dec = ()=>{
    if(count<1)
        alert(`negative is not allowed`)
    else{
        setCount(count-1)
    }
    
}

let handel = ()=>{
    setBool(!bool)
}
  return (
    <div className='counter'>
      <div className="box">
        <h1>Counter App</h1>
      <h1>{count}</h1>                                                                              
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={dec}>Decrease</button>
        <button onClick={()=>setName("React")}>Update</button>
        <h1>I Love {name}</h1>
      <input type="text" placeholder='type' onChange={(e)=>{setValue(e.target.value)}}/>
      
      <h1 >{val}</h1>
      <button onClick={handel} style={{ backgroundColor : bool ? "green" : "red"}  } title={bool ?  'welcome' : 'fucked up'}>{bool ? 'on' : 'off'}</button>
      
      </div>
    </div>
  )
}

export default CounterApp
