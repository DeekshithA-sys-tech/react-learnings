import React, { createContext } from 'react'
import Bcomp from './Bcomp'

export const Fname = createContext()
export const Lname = createContext()
const Acomp = () => {
  return (
    <div>
      <h1>A component</h1>
      <Fname.Provider value="dinga">
        <Lname.Provider value="raja">
            <Bcomp/>
        </Lname.Provider>
      </Fname.Provider>
    </div>
  )
}

export default Acomp
