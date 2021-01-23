import './App.css';
import { MovieProvider } from './MovieContext'
import Nav from './components/Nav'
import AddMovie from './addMovie'
import MovieList from './components/MovieList'

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
