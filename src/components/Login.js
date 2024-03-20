import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from '../utils/validate.js'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
import { bgPic,userAvatar } from '../utils/constants.js';

const Login = () => {

    //HOOKS
    const [isSignInForm,setIsSignInForm]=useState(true);
    const[errorMessage,setErrorMessage]=useState(null)
    const email=useRef(null)
    const password=useRef(null)
    const name=useRef(null)
    const navigate = useNavigate()
    const dispatch= useDispatch()

    // changes signIn and SignOut Forms 
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm)
    }

const handleButtonClick = () =>{
    //Validate form data
    try{
        if(name.current.value.length == 0){
            setErrorMessage("Please Fill Name")
        }
        else{
            const message = checkValidData(email.current.value,password.current.value)
            setErrorMessage(message);
        }
    }
    catch(e){
    const message = checkValidData(email.current.value,password.current.value)
    setErrorMessage(message);
    }
    
    
    const message = checkValidData(email.current.value,password.current.value)
    
    if(message) return; //Error exist so return no authentication needed
    
    // else
    
    //signIn/SignUp

    //From FireBase Documentations
    if(!isSignInForm){
        //For signUp Form
            createUserWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
                )
                .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value,
                    photoURL: userAvatar,
                })
                    .then(() => {
                        const { uid,email,displayName,photoURL } = auth.currentUser;
                        dispatch(
                        addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL,
                    })
                    );
                })
                .catch((error) => {
                    setErrorMessage(error.message)
                });

            })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+""+errorMessage)
        });
    }
    else{
        //for signIn Form
        signInWithEmailAndPassword(
            auth, 
            email.current.value, 
            password.current.value)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+""+errorMessage)
        });
    }

}

return (  
    <div>
        <Header />
        <div className='absolute'>
            <img src={bgPic} alt='bg-pic' />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='bg-[#000000b3] bg-opacity-80 rounded-lg p-12 absolute w-3/12 mt-36 mx-auto right-0 left-0 text-white'>
            <h1 
                className='font-bold text-3xl py-4'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

            {!isSignInForm && (<input ref={name} type="text" placeholder='Full Name' 
                className='p-4 my-4 w-full bg-[#000000b3] border border-solid border-gray-500 bg-opacity-80 rounded-md' />)}

            <input ref={email} type="text" placeholder='Email' 
                className='p-4 my-4 w-full bg-[#000000b3] border border-solid border-gray-500 bg-opacity-80 rounded-md' />
            
            <input ref={password} type="password" placeholder='Password' 
                className='p-4 my-4 w-full bg-[#000000b3] border border-solid border-gray-500 bg-opacity-80 rounded-md' />
            
            <p className='text-[#ff3333] text-lg font-bold'>{errorMessage}</p>

            <button 
                className='cursor-pointer p-3 my-2 bg-red-700 w-full rounded-md' onClick={handleButtonClick}>
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