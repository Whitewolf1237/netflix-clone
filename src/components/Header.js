import React,{useEffect} from 'react'
import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from '../utils/userSlice';
import { logo } from '../utils/constants';

const Header = () => {

    const dispatch= useDispatch()
    const navigate = useNavigate()
    const user = useSelector(store=>store.user)

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


return (
    <div className='flex self-center justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 '>
        <img className="w-44 " src={logo}
            alt='logo'/>
        {user &&(
        <div className='flex p-2'   >
            <img className="w-12 h-12 rounded-full" src={user.photoURL}  alt="userLogo"/>
            <button onClick={handleSignOut} className='font-bold text-white m-2'>Sign Out</button>
        </div>)}
    </div>
)
}

export default Header