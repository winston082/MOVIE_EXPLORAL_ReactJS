import { useEffect, useRef, useState } from "react";
import MovieList from "../component/MovieList";

const API_KEY = "74c55cc";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const inputRef = useRef();

  const fetchMovies = async (query) => {
    setLoading(true);

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );
    const data = await res.json();

    if (data.Response === "True") {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }

    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if (query) fetchMovies(query);
  };

  useEffect(() => {
    fetchMovies("Batman"); // page load par movies
  }, []);

  return (
    <div className="home">
      <form onSubmit={handleSearch}>
        <input
          ref={inputRef}
          className="searchInput"
          placeholder="Search for a movie..."
        />
        <button type="submit">Search 🔎</button>
      </form>

      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  );
}

export default Home;
