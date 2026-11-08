import React, { useState, useEffect } from "react"
import axios from "axios"
const Axiostable =()=>{
    //  let [apidata , setapidata] = useState([])
    // useEffect(()=>{
    //     let resp = axios.get('https://jsonplaceholder.typicode.com/users')
    //     //console.log(resp)
    //     resp.then((respdata)=>{
    //         setapidata(respdata.data)
    //     })
    //     resp.catch
    // },[])
    //  console.log(apidata)
    // let [apidata , setapidata] = useState([])
    // let Fetchapi = async ()=>{
    //     let respdata = await axios.get('https://jsonplaceholder.typicode.com/users')
    //     setapidata(respdata.data)
    // }
    // useEffect(()=>{
    //     Fetchapi()
    // },[])
    // console.log(apidata)
    //
    let [apidata , setapidata] = useState([])
    let Fetchapi = async ()=>{
        try{
            let respdata = await axios.get('https://jsonplaceholder.typicode.com/users')
            setapidata(respdata.data)
        } catch (error){
            console.log(`kuch tho gudbud hey : ${error}`)
        } finally{
            console.log("task is completed")
        }
    }
    useEffect(()=>{
        Fetchapi()
    },[])
    console.log(apidata)
   return (
    <div className="aaxiostable">
      <h1>Dynamic Webpage</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Street</th>
          </tr>
        </thead>

        <tbody>
          {apidata.map((elem) => {
            let { id, name, username, email, phone, address } = elem;

            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{address.street}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
    
export default Axiostable