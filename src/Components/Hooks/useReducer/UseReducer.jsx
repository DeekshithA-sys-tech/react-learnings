import React, { useReducer } from 'react'


const initialState = {
    data: [
        {
            id: 1,
            fname: "deepu",
            lname: "anand"
        },
        {
            id: 2,
            fname: "ram",
            lname: "lakshman"
        },

    ],
    length: 2,
}
const reducer = (state, action) => {
    switch (action.type) {
        case "Delete": {
            const newData = state.data.filter((item) => item.id !== action.payload)
            return {
                ...state,
                data: newData,
                length: newData.length,
            }
        }
        default:
            return state
    }
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)


    const handleDelete = (id) => {

        dispatch({
            type: "Delete",
            payload: id
        })
    }

    return (
        <div>
            <h1> USE REDUCER</h1>

            <h1>total persons : {state.length}</h1>
            {
                state.data.map((item) => {
                    const { id, fname } = item
                    return (


                        <div key={id}>

                            <h1>{fname}</h1>
                            <button onClick={() => handleDelete(id)}>delete</button>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default UseReducer
