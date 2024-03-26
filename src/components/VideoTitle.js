import React from 'react'
import { BsPlayFill } from "react-icons/bs";
import { FiInfo } from "react-icons/fi";

const VideoTitle = ({title,overview}) => {
return (
    <div className='w-screen aspect-video pt-[20%] px-36 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className='flex my-4 gap-5'>
            <div className='flex items-center '>
                <div className=' absolute hover:bg-opacity-50 pl-5'><BsPlayFill className='text-[#000000] relative size-10 p-1'/></div>
                <button className='cursor-pointer bg-white text-black p-4 px-14 rounded-sm text-xl font-bold  hover:bg-opacity-50'> <p className='pl-2'>Play</p></button>
            </div>
            
            <div className='flex items-center'>
                <div className=' absolute hover:bg-opacity-50 pl-6 pt-0'><FiInfo className='text-white relative size-10 p-1'/></div>
                <button className='cursor-pointer bg-gray-400 bg-opacity-80 text-white p-4 px-14  rounded-sm text-xl font-bold  hover:bg-opacity-50'> <p className='pl-4'>More Info</p></button>
            </div>
            
        </div>
    </div>
)
}

export default VideoTitle