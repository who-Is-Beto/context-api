import { useState } from 'react'

export default function MovieList() {
  const [movies, setMovies] = useState([
    {
      name: 'Interstellar',
      price: '$10',
      id: 1,
    },
    {
      name: 'Titanic',
      price: '$11',
      id: 2,
    },
    {
      name: 'Pink Floyd: The wall',
      price: '$15',
      id: 3,
    }
  ])
  return (
    <div className="movies">
      {movies.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  )
}