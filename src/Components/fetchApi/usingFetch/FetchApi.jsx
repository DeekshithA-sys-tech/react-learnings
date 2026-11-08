import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [apidata ,setapidata] = useState([])
async function FetchApidata(){
    let resp = await fetch('https://api.github.com/users')
    
    let data = await resp.json();
    
    setapidata(data);
}

    useEffect(()=>{
        FetchApidata();
    },[])
  return (
    <div>
      <h1>FETCHING API</h1>
      <div>
        {
        apidata.length===0 ? <h1>loading ....</h1> :
        apidata.map((ele)=>{
            console.log(ele)
            let {login , avatar_url} = ele
            return(
                <div>
                    <h2>{login}</h2>
                    <img src={avatar_url} alt={login} />
                </div>
            )

        })
      }
      </div>
    </div>
  )
}

export default FetchApi
