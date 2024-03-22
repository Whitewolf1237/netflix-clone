import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


// eslint-disable-next-line no-lone-blocks
{
/*
    Main Container
      -Video Background
      -Video Title
    Secondary Container
      -MovieList*n
        -cards*n
*/
}

const Browse = () => {
  
  useNowPlayingMovies() //tmdb api call hook

    return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse