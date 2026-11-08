import React, { use, useEffect, useState } from 'react'


const FetchAPI = () => {


  const [data,setdata] = useState([]);
  const getdata = async () => {
    try {
      const getdata = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await getdata.json()
      console.log(data)
      setdata(data)

    } catch (error) {
      console.log(error);
      
    }
    
  }
  useEffect(()=>{
    getdata()
  },[])

  

  return (
    <div className='card'>
      {data ? data.map((curValue)=>{
        console.log(curValue);
        return <div >
          <h3>TITLE : {curValue.title}</h3>
          <p>BODY : {curValue.body}</p>
        </div>
        
      }) : <p>NOTFOUND</p>}
      
    </div>
  )
}

export default FetchAPI
