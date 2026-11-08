import React, { createContext } from 'react'
import P2 from './P2'

export const Gift = createContext()



const P1 = () => {

    let mobile = {
        title : "nokia",
        img :"https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_1280.jpg",
        model: "1100",
        discription :"asdfghjkl;"
    }

  return (
    <div>
      <h1 style={{color:'red'}}>P 1  : DINGA</h1>
      <Gift.Provider value={mobile}>
        <P2/>
      </Gift.Provider>
      
    </div>
  )
}

export default P1
