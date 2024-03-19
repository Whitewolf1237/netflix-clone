import React, { useState } from 'react'
import Header from './Header'


const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true);
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm)

    }

  return (
    
    <div>
        <Header />
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt='bg-pic' />
        </div>
        <form className='bg-[#000000b3] bg-opacity-80 rounded-lg p-12 absolute w-3/12 mt-36 mx-auto right-0 left-0 text-white'>
            <h1 
                className='font-bold text-3xl py-4'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

            {!isSignInForm && (<input type="text" placeholder='Full Name' 
                className='p-4 my-4 w-full bg-[#000000b3] border border-solid border-gray-500 bg-opacity-80 rounded-md' />)}

            <input type="text" placeholder='Email or phone number' 
                className='p-4 my-4 w-full bg-[#000000b3] border border-solid border-gray-500 bg-opacity-80 rounded-md' />
            
            <input type="password" placeholder='Password' 
                className='p-4 my-4 w-full bg-[#000000b3] border border-solid border-gray-500 bg-opacity-80 rounded-md' />
            
            <button 
                className='cursor-pointer p-3 my-2 bg-red-700 w-full rounded-md'>
                {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className='cursor-pointer p-6 text-white' 
                onClick={toggleSignInForm}>
                    {isSignInForm? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now" }
                    </p>
        </form>
       
    </div>
  )
}

export default Login