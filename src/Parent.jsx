import React, { useState } from 'react'
import Child from '../src/child'
const Parent = () => {

    const [isChildVisible, setIsChildVisible] = useState(true)
  return (
    <div>
      <button onClick={()=>setIsChildVisible(!isChildVisible)}>Toggle Child</button>
      {isChildVisible && <Child/>}
    </div>
  )
}

export default Parent
