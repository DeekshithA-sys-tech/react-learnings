import React, { useEffect, useState } from 'react'
import '../../fetchApi/style.css'
import axios from 'axios'
const AxiosFetchData = () => {
    const [apidata, setapidata] = useState([])
    const apiFetch = async()=>{
        let resp = await axios.get('https://api.github.com/users')        
        let arrData = resp.data
        setapidata(arrData)
    }
     console.log(apidata)
    useEffect(()=>{
        apiFetch();
    },[])
  return (
    <div className='card'>
      <h1>Axios data fetching</h1>
    <div className='container'>
        {        
            apidata.map((item)=>{
            return(
                <div >
                    <h2 className='title'>{item.login}</h2>
                    <img className='my-img' src={item.avatar_url} alt={item.login}/>
                </div>
            )
        })       
      }
      </div>
    </div>
  )
}

export default AxiosFetchData