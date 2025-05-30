import React from "react";
import { Link } from "react-router-dom";

export default function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((film) => (
          <Link key={film.imdbID} to={`/movies/${film.imdbID}`} className="movie-card">
            <div>
              <img
                src={film.Poster !== "N/A" ? film.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
                alt={film.Title}
              />
              <div className="movie-info">
                <p>{film.Title}</p>
                <span>{film.Year}</span>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="no-movie">Фильм не найден, напишите запрос</p>
      )}
    </div>
  );
}
