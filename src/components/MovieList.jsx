import { useContext } from 'react'
import { MovieContext } from '../MovieContext'
import Movie from './Movie'

export default function MovieList() {

  const [movies, setMovies] = useContext(MovieContext)

  return (
    <div className="movies">
      {movies.map((item) => (
        <Movie key={item.id} item={item} />
      ))}
    </div>
  )
}