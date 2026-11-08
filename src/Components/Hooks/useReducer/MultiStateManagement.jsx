import React, { useEffect, useReducer } from 'react'


// TYPES
const FETCH_INIT = "FETCH_INIT"
const FETCH_START = "FETCH_START"
const FECTH_ERROR = "FETCH_ERROR"

// initial state
const initial_state = {
  loading: true,
  data: null,
  error: null
}

// //  dataReducer function

const dataReducer = (state, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return { ...state, loading: true, error: null };
    case FETCH_START:
      return { ...state, loading: false, data: action.payload };
    case FECTH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}


const MultiStateManagement = () => {
  // useReducer accepts two parameter : 1)function 2) initial state 
  // it returns state and dispatch
  // dataReducer is a function
  const [state, dispatch] = useReducer(dataReducer, initial_state)
  const dataHandler = async () => {
    try {
      dispatch({ type: FETCH_INIT })
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      const data = await res.json();
      console.log(data)
      dispatch({ type: FETCH_START, payload: data })
    } catch (error) {
      dispatch({ type: FECTH_ERROR, payload: error.message })
    }

  }
  useEffect(() => {

    dataHandler()
  }, [])

  return (
    <div>
      <h1>use reducer</h1>
      {
        state.loading && <h1>Loading...</h1> 
      }
      {
        state.data &&  <div>
          {state.data.map((item) => {
            return (
              <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
              </div>
            )
          }
          )}
          </div>
      }
      {state.error && <div>{alert(`error`)}</div>}
    </div>
  )
}



export default MultiStateManagement


