import React, { useState } from "react";
import axios from "axios";

export default function Search({ onSearch }) {
  const [filmInput, setFilmInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=17dec6d0&s=${filmInput}`
      );

      if (response.data.Response === "True") {
        onSearch(response.data.Search);
      } else {
        onSearch([]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
      setFilmInput("");
    }
  };

  return (
    <div className="search-container">
      <h1>Movie Search App</h1>
      <form onSubmit={handleSearch} className="search-form">
        <button type="submit" disabled={isLoading}>
          {isLoading ? "🔍" : "🔎"}
        </button>
        <input
          type="text"
          placeholder="Favorite film"
          value={filmInput}
          onChange={(e) => setFilmInput(e.target.value)}
        />
      </form>
    </div>
  );
}
