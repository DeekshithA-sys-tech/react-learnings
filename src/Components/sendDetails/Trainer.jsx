import React from 'react'
import Student1 from './Student1'
import Student2 from './Student2'
const Trainer = () => {
    const student = {
        fname : 'DINGA',
        lname : 'RAJA',
        age :'21',
        degree :'BE'
    }
    const student2 = {
        fname : 'DINGI',
        lname : 'RANI',
        age :'21',
        degree :'BE'
    }
  return (
    <div>
      <h1>Im a Trainer</h1>
      <Student1 s1={student}/>
      <Student2 s2={student2}/>
    </div>
  )
}

export default Trainer