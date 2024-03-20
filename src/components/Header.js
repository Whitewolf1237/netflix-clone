import React from 'react'
import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

    const navigate = useNavigate()
    const user = useSelector(store=>store.user)

const handleSignOut=()=>{
    signOut(auth).then(() => {
        navigate("/")
    }).catch((error) => {
        navigate("/error")
    });
}

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