function Movie({ item }) {
  return (
    <div className="movie__item">
      <h3>{item.name}</h3>
      <h4>{item.price}</h4>
    </div>
  )
}

export default Movie