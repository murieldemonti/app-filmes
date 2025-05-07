import React from 'react';

const MovieList = ({ movies }) => {
    if (!movies || movies.length === 0) {
        return <p>No results found.</p>;
    }

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <div key={movie.show.id} className="movie-card">
                    <h2>{movie.show.name}</h2>
                    {movie.show.image && (
                        <img src={movie.show.image.medium} alt={movie.show.name} />
                    )}
                    <div dangerouslySetInnerHTML={{ __html: movie.show.summary }} />
                </div>
            ))}
        </div>
    );
};

export default MovieList;
