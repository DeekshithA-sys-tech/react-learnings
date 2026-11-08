import React, { useState } from 'react'
import axios from 'axios'

const MovieSearch = () => {

    const [inputvalue, setInputvalue] = useState("")
    const [movies, setMovies] = useState([])

    
    const handleChange = (e) => {
        setInputvalue(e.target.value)
    }

    
    const findmovie = async (e) => {
        e.preventDefault()

        const api = `https://www.omdbapi.com/?s=${inputvalue}&apikey=15fa947a`

        try {
            const resp = await axios.get(api)

            console.log(resp.data)

            setMovies(resp.data.Search || [])
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div>

                <form onSubmit={findmovie}>
                    <input
                        type="text"
                        placeholder='Search Movie'
                        value={inputvalue}
                        onChange={handleChange}
                    />

                    <button type='submit'>Search</button>
                </form>

                {
                    movies.map((item) => {
                        return (
                            <div key={item.imdbID}>
                                <h2>{item.Title}</h2>

                                <img
                                    src={item.Poster}
                                    alt={item.Title}
                                    width="200px"
                                />
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default MovieSearch