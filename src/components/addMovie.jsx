import React, { useState, useContext } from 'react'
import { MovieContext } from '../MovieContext'
import '../styles/addMovie.css'

const AddMovie = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [, setMovies] = useContext(MovieContext)

  const updateName = (event) => {
    setName(event.target.value)
  }

  const updatePrice = (event) => {
    setPrice(event.target.value)
  }

  const addMovie = (event) => {
    event.preventDefault()
    setMovies(prevMovies => [
      ...prevMovies,
      {
        name: name,
        price: price,
        id: Math.random() * 1000
      }
    ])
  }

  return (
    <div className="inputs__container">
      <form onSubmit={addMovie}>
        <input
          type="text"
          name='name'
          value={name}
          onChange={updateName}
          placeholder='Movie Player' />
        <input
          type="text"
          name='price'
          value={price}
          onChange={updatePrice}
          placeholder='Movie Price' />
        <button><i className="fas fa-check"></i></button>
      </form>
    </div>
  )
}

export default AddMovie
