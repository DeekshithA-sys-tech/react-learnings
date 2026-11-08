import React, { useContext } from 'react'
import {Fname,Lname} from './Acomp'
const Dcomp = () => {
    const fname = useContext(Fname)
    const lname = useContext(Lname)

  return (
    <div>
      <h1>D component</h1>
      <h3>{fname}</h3>
      <h3>{lname}</h3>
        
    </div>
  )
}

export default Dcomp
