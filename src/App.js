import React, { useState } from 'react';
import MovieList from './components/MovieList';

const App = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        if (!query.trim()) return;
        try {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>TV Show Finder</h1>
            <input
                type="text"
                placeholder="Search for a show..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <MovieList movies={results} />
        </div>
    );
};

export default App;
