import React, { useRef, useState } from 'react'

const Task = () => {
    let [bool, setBool] = useState('True')
    let changeBool = () => {
        bool ? setBool(false) : setBool(true)
    }
    let val = useRef()

  return (
   
    
    <div>
      <input type="password" name="" id="" placeholder='enter passowrd'/>

      <button onClick={changeBool}>{bool ? <>show</> : <>hide</>}</button>
    </div>
  )
}

export default Task
