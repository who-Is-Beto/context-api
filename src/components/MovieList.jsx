/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import { MovieContext } from '../MovieContext'
import Movie from './Movie'

export default function MovieList() {

  const [movies, setMovies] = useContext(MovieContext)

  const saveLocalMovies = () => {
    localStorage.setItem('movies', JSON.stringify(movies))
  }

  const getLocalMovies = () => {
    if (localStorage.getItem('movies') === null) {
      localStorage.setItem('movies', JSON.stringify([]))
    } else {
      let localMovies = JSON.parse(localStorage.getItem('movies'))
      setMovies(localMovies)
    }
  }

  useEffect(() => {
    getLocalMovies()
  }, [])

  useEffect(() => {
    saveLocalMovies()
  }, [movies])

  return (
    <div className="movies">
      <h1>Movie List</h1>
      {movies.map((item) => (
        <Movie
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}