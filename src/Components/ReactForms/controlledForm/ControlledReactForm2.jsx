import React, { useState } from 'react'
import './style.css'
const ControlledReactForm2 = () => {

    let [formdata , setformdata] = useState({fname : "", lname : ""})
    

    let handleInput = (e)=>{
        e.preventDefault()
        // console.log(e.target.name , e.target.value)

        let {name,value} = e.target
        // console.log(name,value)
        
        setformdata({
            ...formdata,
            [name] : value
        })
    }

    let handleform = (e)=>{

        e.preventDefault()
        console.log(formdata)
        setformdata({fname : "", lname : ""})
    }
  return (
    <div className='react-forms'>
        <h1>User Details</h1>
        <div className="form-box">
            
            <form onSubmit={handleform}>
                <input 
                    type="text" 
                    placeholder="enter first name"
                    onChange={handleInput}
                    name="fname"
                    value={formdata.fname}
                    
                />
                <input 
                    type="text" 
                    placeholder="enter last name"
                    onChange={handleInput}
                    name="lname"
                    value={formdata.lname}
                />
                <button>submit</button>
            </form>
        </div>
    </div>
  )
}

export default ControlledReactForm2
