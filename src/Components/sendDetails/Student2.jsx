import React from 'react'

const Student2 = ({s2}) => {
    let {fname,lname,age,degree}=s2
  return (
    <div>
      <h1>{fname}  {lname}  {age}   {degree}</h1>
    </div>
  )
}

export default Student2
