import React from 'react'

const Events = () => {
    const event = ()=>{
        return alert("Event is triggered")
    }
    const printName= (Name)=>{
        return alert(`Name: ${Name}`)
    }
    const calculateage = (year)=>{
        let curYear = new Date().getFullYear()
        let age = curYear - year
        console.log(age)
        return alert(`Age: ${age}`)
    }
    const user = [{ id: 1, name: "Dinga" ,place : "goa",year: 2004}, 
        { id: 2, name: "Dingi" ,place : "udupi",year: 2000}, 
        { id: 3, name: "Dingu" ,place : "blore",year: 1995}]

    const userData = (name,place,year)=>{
        const age = new Date().getFullYear()-year
        return alert(`Name : ${name} place:${place} age : ${age}`)
    }
  return (

    <div>  
      <h1>events</h1>
      <button onClick={event}>Event</button>
      <button onClick={()=>printName("Dinga")}>Print Name</button>
      <button onClick={()=>{calculateage(2004)}}>calculate Age</button>
      <div className="container">
        <ul>{user.map((curUser)=>{
                const {id,name,place,year} = curUser
                return (
                    <div key={id}>                       
                            <li>{name}</li>
                            <li>{place}</li>
                            <li>{new Date().getFullYear()-year}</li>
                            <button onClick={()=>{
                                userData(name,place,year)
                            }}>view</button>
                    </div>
                )
            })
        }
        </ul>
      </div>
    </div>
  )
}

export default Events
