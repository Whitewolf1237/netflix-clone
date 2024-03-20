import React,{useEffect} from 'react'
import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from '../utils/userSlice';


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
        onAuthStateChanged(auth, (user) => {
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
    },[])


return (
    <div className='flex self-center justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 '>
        <img className="w-44 " src="https://assets.nflxext.com/ffe/siteui/acquisition/home/nflxlogo.png" 
            alt='logo'/>
        {user &&(
        <div className='flex p-2'   >
            <img className="w-12 h-12 " src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"  alt="userLogo"/>
            <button onClick={handleSignOut} className='font-bold text-white m-2'>Sign Out</button>
        </div>)}
    </div>
)
}

export default Header