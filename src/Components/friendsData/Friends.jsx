import React from 'react'
import { friendsData } from './Friendsdata'
import './friends.css'
const Friends = () => {
  return (
    <div>
      <h1>Friends List</h1>
      <div className="container">
        <table border={1}>
          <thead>
            <tr>
              <th>Index</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Place</th>
              <th>Degree</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            { friendsData.map((friend, index) => {
                const { fname, lname, dob, place, degree, image } = friend;
                let curyear =  new Date().getFullYear()
               
                return ( 
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{fname}</td>
                        <td>{lname}</td>
                        <td>{dob}</td>
                        <td>{place}</td>
                        <td>{degree}</td>
                        <td><img src={image} alt={`${fname} ${lname}`} /></td>
                        <td>{curyear}</td>
                    </tr>
                )
            })}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Friends
