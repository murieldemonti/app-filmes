import React from 'react';

function MovieList({ movies }) {
    return (
        <div>
            {movies.map((item) => (
                <div key={item.show.id} style={{ marginBottom: '20px' }}>
                    <h2>{item.show.name}</h2>
                    {item.show.image && (
                        <img
                            src={item.show.image.medium}
                            alt={item.show.name}
                            style={{ width: '150px' }}
                        />
                    )}
                    <div dangerouslySetInnerHTML={{ __html: item.show.summary }} />
                </div>
            ))}
        </div>
    );
}

export default MovieList;
