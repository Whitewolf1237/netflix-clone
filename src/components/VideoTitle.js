import React from 'react'

const VideoTitle = ({title,overview}) => {
return (
    <div className='w-screen aspect-video pt-[20%] px-36 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className='flex my-4 gap-5'>
            <button className='cursor-pointer bg-white text-black p-4 px-10 rounded-md text-xl  hover:bg-opacity-50'>▶ Play</button>
            <button className='cursor-pointer bg-gray-500 text-white p-4 px-10   rounded-md text-lg bg-opacity-80 hover:bg-opacity-50'>More Info</button>
        </div>
    </div>
)
}

export default VideoTitle