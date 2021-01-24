import { useState, createContext } from 'react'

export const MovieContext = createContext()

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Interstellar',
      price: 10,
      id: 1,
    },
    {
      name: 'Titanic',
      price: 11,
      id: 2,
    },
    {
      name: 'Pink Floyd: The wall',
      price: 15,
      id: 3,
    }
  ])
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  )
}