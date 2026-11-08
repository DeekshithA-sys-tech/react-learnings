import React from 'react'
import { Studentsdata } from './Students_data'
import './stdDataTable.css'
const Students = () => {
   
  return (
    <div>
      <h1>Student Database</h1>
    <div className="container">
        <table border={0}>
            <thead >
                <tr>
                    <th>index</th>
                    <th>slno</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>PLACE</th>
                    <th>DOB</th>
                    <th>DEGREE</th>
                </tr>
            </thead>
            <tbody>
                {Studentsdata.map((e,index)=>{
                    const {id,fname,lname,place,dob,degree} = e;
                    
                        return(
                            <tr key={index}>   
                                <td>{index+1}</td>                          
                                <td>{id}</td>
                                <td>{fname}</td>
                                <td>{lname}</td>
                                <td>{place}</td>
                                <td>{dob}</td>
                                <td>{degree}</td>
                            </tr>
                        )
                })}
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Students
