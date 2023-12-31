import { useState, useEffect, ChangeEvent } from "react";
import styles from "./App.module.css";
import { Movie, MovieProps } from "./components/Movie"

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>-
      {loading ? <h1>Loading...</h1> : null}
      <ul>
        {movies.map((movie: MovieProps) => (
          <Movie key={movie.id} movie={movie}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
