import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import MovieDetail from "./Pages/MovieDetail";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = (searchResults) => {
    setMovies(searchResults);
  };

  return (
    <BrowserRouter>
      <Search onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
