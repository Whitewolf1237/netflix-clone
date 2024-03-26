import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { bgPic } from '../utils/constants'

const GptSearch = () => {
return (
    <div>
        <div className='absolute -z-10'>
            <img className='h-screen object-cover w-screen' src={bgPic} alt='bg-pic' />
        </div>
        <div className=''>
            <GptSearchBar /> 
            <GptMovieSuggestion />
        </div>
    </div>
)
}

export default GptSearch