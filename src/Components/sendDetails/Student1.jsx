import React from 'react'

const Student1 = ({s1}) => {
    let {fname,lname,age,degree}= s1
    console.log(s1)
  return (
    <div>
      <h1>{fname} {lname}'s age is {age} and pursuing {degree}</h1>
    </div>
  )
}

export default Student1
