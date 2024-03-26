import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const langKey=useSelector(store=>store.config.lang)
return (
    <div className='pt-[9%] flex justify-center'>
        <form className='  bg-black w-1/2 grid grid-cols-9 rounded-lg'>
            <input type='text' className='p-4 m-4 rounded-md col-span-6' placeholder={lang[langKey].gptSearchPlaceHolder}/>
            <button className='py-2 px-4 bg-red-700 text-white m-4 col-span-3 rounded-lg   '>{lang[langKey].search}</button>
        </form>
    </div>
)
}

export default GptSearchBar