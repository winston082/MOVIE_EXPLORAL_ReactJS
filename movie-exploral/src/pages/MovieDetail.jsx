import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "74c55cc";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
      );
      const data = await res.json();
      setMovie(data);
    }
    getMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Released:</strong> {movie.Released}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
    </div>
  );
}

export default MovieDetail;
