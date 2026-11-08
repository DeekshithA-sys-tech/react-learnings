import React, { useState } from 'react'
import CardToggle from './CardToggle'



const TogglePara = () => {
    
    
    let [bool, setBool] = useState(true)
    let handleEvent = () => {
        setBool(!bool)
        bool?document.body.style.background = "black":document.body.style.background = "white"
    }
    return (
        <div >
            
                <button onClick={handleEvent} >
                    <div><button>{bool ? <></> : <>Dark Mode 🌑</>}</button></div>
                    <div><button>{bool ? <>Light Mood ☀️</> : <></>}</button></div>
                </button>
            
        </div>
    )
}

export default TogglePara