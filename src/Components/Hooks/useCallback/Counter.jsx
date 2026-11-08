import React from 'react'
import { useState , useCallback } from 'react'

const ref = []


const Counter = () => {
  const [count, setCount] = useState(0)
 
const Increment = useCallback(() => {
    setCount((count)=>count+1)
},[]);
console.log(count)
ref.push(Increment);
if(ref.length === 2){
    console.log(ref[0]===ref[1])  // true : because returns cached function
}


// const Increment = () => {
//     setCount((count)=>count+1)
// }
// if(ref.length === 2){
//     console.log(ref[0]===ref[1])  // false : functions reference is different
// }

  return (
    <div>
        <h3>{count}</h3>
        <button onClick={()=>Increment()}>Increase</button>
    </div>
  )
}

export default Counter