import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import addTrailerVideo from '../utils/moviesSlice'
import { useEffect } from "react";

const useMovieTrailer= (movieId)=>{
    const dispatch = useDispatch()

    //Fetch movie trailer through API call && updating the store
    const getMovieVideos = async ()=>{
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US',
            API_OPTIONS
            ) 
        const json = await data.json()

        const filterData = json.results.filter(video=>video.name == "Official Trailer")  //sortlisting official trailer of the movie
        const trailer = filterData.length ? filterData[0]:json.results[0]  //iff thiers no trailer video
        dispatch(addTrailerVideo(trailer))
    }
    useEffect(()=>{
        getMovieVideos();
    },[])
}

export default useMovieTrailer