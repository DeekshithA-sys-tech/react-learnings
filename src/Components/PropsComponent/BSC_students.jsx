import React from 'react'

const BSC_students = ({ BSC }) => {
  return (
    <div className='table'>
      <h1>BSC STUDENTS</h1>
      <table>
        <thead>
          <tr>
            <th>slno</th>
            <th>first name</th>
            <th>last name</th>
            <th>age</th>
            <th>degree</th>
            <th>stream</th>
          </tr>
        </thead>
        <tbody>
          {BSC.map((e, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{e.fname}</td>
              <td>{e.lname}</td>
              <td>{e.age}</td>
              <td>{e.degree}</td>
              <td>{e.stream}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default BSC_students
