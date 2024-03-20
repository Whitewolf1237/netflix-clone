import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'


const Browse = () => {
  
  useNowPlayingMovies() //tmdb api call hook

    return (
    <div>
      <Header />
    </div>
  )
}

export default Browse