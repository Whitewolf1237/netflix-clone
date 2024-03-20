import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { addNowPlayingMovies } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const useNowPlayingMovies=()=>{
        const dispatch = useDispatch()

        // TMDB API CALLS START FROM HERE 

        const getNowPlayingMovies=async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/now_playing?page=1',
            API_OPTIONS
            )
        const json =await data.json()
        console.log(json);
        dispatch(addNowPlayingMovies(json))
        }

        useEffect(()=>{
        getNowPlayingMovies()
        },[])
        // ends here
}

export default useNowPlayingMovies