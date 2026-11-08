import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

import ParentComponent from './ParentComponent'


export const placeholderData = createContext()
const FetchAPI = () => {
    let [initialData , setdata] = useState([])
    let fetchData = async () => {
        try {
            let res = await axios.get('http://localhost:4000/users') 
            
            // console.log(res.data)
            setdata(res.data)

        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div>
      <h1>JSON PLACEHOLDER</h1>
      {
        // initialData.map((ele,index)=>{

        //     return(
        //         <ol key={index}>
        //             <li>{ele.title}</li>
        //         </ol>
        //     )
        // })

       
            initialData.length===0 ? 
            <h1>loading</h1> : 
            <placeholderData.Provider value={initialData}>
                <ParentComponent/>
            </placeholderData.Provider>
        

      }

    </div>
  )
}

export default FetchAPI
