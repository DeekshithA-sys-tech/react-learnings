import React, { useEffect, useState } from 'react'

const FetchingJsonApi = () => {

    const [apiData , setApiData] = useState([])
    const fetchData = async()=>{
        const resp = await fetch('http://localhost:4000/students')
        const data = await resp.json()
        setApiData(data)
    }
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div>
        <h1 style={{textAlign:"center"}}>STUDENT DATA</h1>
        {
            apiData.map((ele,index)=>{
                const {id,fname ,lname,age,degree,place} = ele
                return (
                    <div key={index}>
                        <h1>{fname}</h1>
                        <h2>{lname}</h2>
                        <h3>{age}</h3>
                        <h4>{degree}</h4>
                        <h5>{place}</h5>
                        <br />
                    </div>
                )
            })

        }
      
    </div>
  )
}

export default FetchingJsonApi
