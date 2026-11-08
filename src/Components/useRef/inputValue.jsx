import React, { useRef } from 'react'

const InputValue = () => {
    let elem = useRef()
   
    let h2 = useRef()
    
    let handle = ()=>{
       let inputVAl = elem.current.value
       console.log(inputVAl);
       h2.current.innerText = inputVAl

    
    }
  return (
    <div>
      <input 
        ref={elem}
        type="text" 
        placeholder='enter something'
        onChange={handle}/>
      <h2 ref={h2}> </h2>
    </div>
  )
}

export default InputValue
