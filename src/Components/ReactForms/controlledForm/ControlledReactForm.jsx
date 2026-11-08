import React, { useState } from 'react'
import './style.css'
const ControlledReactForm = () => {
  let [Fname,setFname] = useState("")
  let [newFname , setNewFname] = useState("")
  let [Lname,setLname] = useState("")
  let [newLname , setNewLname] = useState("")

  let handleForm = (e)=>{
    e.preventDefault()
    

    setNewFname(Fname)
    setNewLname(Lname)

    setFname("")
    setLname("")
    
  }

  return (
    <div className='react-forms'> 
      <h1>React Controlled Form</h1>
      <div className="form-box">
        <h3>Print Name</h3>
        <form onSubmit={handleForm}>
            <input 
                type="text" 
                value={Fname}
                placeholder='Enter First Name' 
                onChange={(e)=>setFname(e.target.value)}
            />
            <input 
              type="text" 
              value={Lname}
              placeholder='Enter Last Name'
              onChange={(e)=>{setLname(e.target.value)}}
            />
            <button>Print Name</button>
        </form>
        
      </div>  
      <h2>{newFname}</h2>
      <h2>{newLname}</h2>
      
    </div>
  )
}

export default ControlledReactForm
