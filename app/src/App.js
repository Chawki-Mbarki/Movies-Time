import { useEffect, useState } from "react";

import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=8f9989f9";

const Movie1 = {
  "Title": "Spider-Man",
  "Year": "2002",
  "imdbID": "tt0145487",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_SX300.jpg"
}

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <div className="app">
      <h1>MoviesTime</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
        />
        <img
          src={SearchIcon}
          alt="Search"
        />
      </div>
      {movies.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
    </div>
  );
}

export default App;
