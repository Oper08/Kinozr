import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './MovieDetail.css';

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=17dec6d0&i=${id}&plot=full`
        );
        if (response.data.Response === "True") {
          setMovie(response.data);
        } else {
          console.error("Фильм не найден");
        }
      } catch (err) {
        console.error(err.message);
      }
    }

    fetchData();
  }, [id]);

  if (!movie) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className="movie-container">
      <img
        src={
          movie.Poster === "N/A"
            ? "https://via.placeholder.com/300x450?text=No+Image"
            : movie.Poster
        }
        alt={movie.Title}
      />
      <div className="movie-details">
        <h1>
          {movie.Title} <span>({movie.Year})</span>
        </h1>
        <ul>
          <li>Рейтинг IMDb: {movie.imdbRating}</li>
          <li>Продолжительность: {movie.Runtime}</li>
          <li>Возрастной рейтинг: {movie.Rated}</li>
        </ul>
        <p>{movie.Plot}</p>
        <div className="info-section">
          <div>
            <h3>Режиссер</h3>
            <p>{movie.Director}</p>
          </div>
          <div>
            <h3>Актеры</h3>
            <p>{movie.Actors}</p>
          </div>
          <div>
            <h3>Жанр</h3>
            <p>{movie.Genre}</p>
          </div>
        </div>
        <Link to="/" className="back-link">
          Назад на главную
        </Link>
      </div>
    </div>
  );
}
