import React from 'react'

const VideoTitle = ({title,overview}) => {
return (
    <div className='pt-36 px-12'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className='flex my-4 gap-5'>
            <button className='cursor-pointer bg-gray-500 text-black p-4 px-16 rounded-md text-xl bg-opacity-50'>▶ Play</button>
            <button className='cursor-pointer bg-gray-500 text-white p-4 px-16 rounded-md text-lg bg-opacity-50'>More Info</button>
        </div>
    </div>
)
}

export default VideoTitle