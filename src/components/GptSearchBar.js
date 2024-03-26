import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import openai from '../utils/openAi'

const GptSearchBar = () => {

    const searchText=useRef(null)
    const langKey=useSelector(store=>store.config.lang)

    const handleGptSearchClick=async ()=>{

        const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query"+searchText.current.value+".only give me names of 5 movies,comma seperated like the example result given ahead.Example Results: Now You See Mee,Gadaar,Sholay,Don,GolMaal."

        //Make an api call to openAi api
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        console.log(gptResults.choices?.[0]?.message?.content);
        const gptMovies = gptResults.choices?.[0]?.message?.content
    }
return (
    <div className='pt-[35%] md:p-0 flex justify-center'>
        <form className=' bg-black w-1/2 grid grid-cols-9 rounded-lg' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type='text' className='p-4 m-4 rounded-md col-span-6' placeholder={lang[langKey].gptSearchPlaceHolder}/>
            <button className='py-2 px-4 bg-red-700 text-white m-4 col-span-3 rounded-lg' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
)
}

export default GptSearchBar