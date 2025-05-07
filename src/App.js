import React, { useState } from 'react';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (query.trim() === '') return;
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
      <div className="App">
        <h1>TV Shows Search</h1>
        <input
            type="text"
            value={query}
            placeholder="Search for a show..."
            onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <MovieList movies={movies} />
      </div>
  );
}

export default App;
