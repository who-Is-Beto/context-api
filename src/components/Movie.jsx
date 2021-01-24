import { useContext } from 'react'
import { MovieContext } from '../MovieContext'
import '../styles/Movie.css'


function Movie({ item }) {

  const [movies, setMovies] = useContext(MovieContext)

  const handleDeleteMovie = () => {
    console.log(item.id)
    setMovies(movies.filter((element) => element.id !== item.id))
  }
  return (
    <div className="movie__item">
      <h3>{item.name}</h3>
      <h4>
        $
        {''}
        {item.price}
        {'  '}
        <button onClick={handleDeleteMovie}><i className="far fa-trash-alt"></i></button>
      </h4>
    </div>
  )
}

export default Movie