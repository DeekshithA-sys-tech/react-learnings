import React, { useRef } from 'react'

const ReactForm1 = () => {
    let fnameField = useRef()
    let lnameField = useRef()
    let place = useRef()
    let date = useRef()
    let res = useRef()
    let handleForm = (event)=>{
        event.preventDefault()
        let fname = fnameField.current.value
        let lname = lnameField.current.value
        let plac = place.current.value
        let dat = date.current.value      
        let age =new Date().getFullYear()- new Date(dat).getFullYear()
        console.log(fname,lname,plac,dat,age)
        res.current.innerText = `NAME : ${fname} \n lname :${lname}\n place : ${plac}\n dob: ${dat}\n age : ${age}`

    }
  return (
    <div>
      
      <div className="react-froms">
        <h1>Uncontrolled React From</h1>
        <div className="form-box">
            <form onSubmit={()=>handleForm(event)} >
            <input ref={fnameField} type="text" placeholder='enter first name'/>
            <input ref={lnameField} type="text" placeholder='enter last name'/>
            <input ref={place} type="text" placeholder='enter place'/>
            <input ref={date} type="date"/>
            <button>print name</button>
        </form>
            <h2 ref={res}></h2> 
        </div>
        
      </div>
    </div>
  )
}

export default ReactForm1
