import React,{useEffect} from 'react'
import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from '../utils/userSlice';
import { SupportedLanguages, logo } from '../utils/constants';
import { userAvatar } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

    const dispatch= useDispatch()
    const navigate = useNavigate()
    const user = useSelector(store=>store.user)
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

const handleSignOut=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
        navigate("/error")
    });
}

    //userLogin authentication
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid,email,displayName,photoURL} = user;
                dispatch(
                    addUser({
                        uid:uid,
                        email:email,
                        displayName:displayName,
                        photoURL:photoURL
                }))
                navigate("/browse")
            } else {
                //User Sign Out
                dispatch(removeUser()); //return null from userSlice.js
                navigate("/")
            }
        });

        //unsubscribes when component unmounts
        return()=>{ unsubscribe()  //from firebase documentation

        }

    },[])

    const handleGptSearchClick=()=>{
        dispatch(toggleGptSearchView())
    }

    const handleLanguageChange=(e)=>{ //capture an event
        dispatch(changeLanguage(e.target.value))
    }

return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between '>
        <img className="w-44 mx-auto md:mx-0 " src={logo}
            alt='logo'/>
        {user &&(
        <div className='flex p-2'   >
            {showGptSearch && 
            <select 
                className='p-2 bg-gray-900 text-white rounded-md m-2' 
                onChange={handleLanguageChange}
                >
                {SupportedLanguages.map((lang)=> (
                    <option key={lang.identifier} value={lang.identifier}>
                        {lang.name}
                    </option>))}
            </select>}
            <button className='py-2 px-4 mx-4 my-2 bg-white rounded-md' 
            onClick={handleGptSearchClick}
            >{showGptSearch?"HomePage":"GPT SEARCH"}</button>
            <img className="w-12 h-12 rounded-full object-cover" src={userAvatar}  alt="userLogo"/>
            <button onClick={handleSignOut} className='font-bold text-white m-2'>Sign Out</button>
        </div>)}
    </div>
)
}

export default Header