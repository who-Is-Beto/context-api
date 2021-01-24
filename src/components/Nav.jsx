import React, { useContext } from 'react'
import { MovieContext } from '../MovieContext'
import '../styles/Nav.css'


function Nav() {
  const [movies] = useContext(MovieContext)
  return (
    <header>
      <nav>
        <span>useContext API</span>
        <span>Movie list: {movies.length}</span>
      </nav>
    </header>
  )
}

export default Nav

