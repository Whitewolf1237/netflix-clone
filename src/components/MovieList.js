import React from 'react'
import MovieCard from './MovieCard'

const MovieList = (title,movies) => {
    console.log(movies)
return (
    <div>
        <div>
            <h1>Now Playing</h1>
            <div>
                <MovieCard />
            </div>
        </div>

    </div>
)
}

export default MovieList