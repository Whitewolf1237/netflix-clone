import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpComingMovies from '../hooks/useUpComingMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'


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

  const showGptSearchView = useSelector(store=>store.gpt.showGptSearch)
  
  useNowPlayingMovies() //tmdb api call hook for now playing movies list
  usePopularMovies()  //tmdb api call hook for popular movies list
  useTopRatedMovies() //tmdb api call hook for topRated movies list
  useUpComingMovies() //tmdb api call hook for upComing movies list

    return (
    <div>
      <Header />
        {showGptSearchView?(
          <GptSearch />
          ) : (
              <>
              <MainContainer/>
              <SecondaryContainer/>
              </>
          )
        }
      

    </div>
  )
}

export default Browse