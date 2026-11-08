import React, { useRef } from 'react'
import './style.css'

const ReactForm2 = () => {
    let FormData = useRef()
    let PrintData = useRef()
    let handleForm = ()=>{
        event.preventDefault()
        let fname = FormData.current[0].value
        let lname = FormData.current[1].value
        let plac = FormData.current[2].value
        let dat = FormData.current[3].value
        console.log(fname,lname,plac,dat)
        let age =new Date().getFullYear()- new Date(dat).getFullYear()
        
        PrintData.current.innerText = `fname :${fname} \n lname : ${lname} \n place :${plac}\n DOB:${dat} Age :${age}\n `

    }
  return (
    <div className='react-froms'>
        
      <h1>Avoiding Multiple Useref</h1>
      <div className="form-box">
        <h1> Details</h1>
        <form ref={FormData} onSubmit={handleForm}>
            <input type="text" placeholder='enter first name '/>
            <input type="text"  placeholder='enter last name'/>
            <input  type="text" placeholder='enter place'/>
            <input  type="date"/>
            
            <button>submit</button>
        </form>
        <h2 ref={PrintData}></h2>
      </div>
    </div>
  )
}

export default ReactForm2
