import { useState } from "react";
import Header from "./Header";

function SignIn(){
    const [isSignIn,setISignIn] = useState(true)

    const toggleForm = () =>{
        setISignIn(!isSignIn)
    }

    return(
        <>
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"></img>
        </div>
        <form className="absolute p-10 bg-black w-4/12 mx-auto my-36 right-0 left-0 opacity-80">
        <h1 className=" text-white text-3xl font-bold">{isSignIn? 'Sign In' : 'Sign UP'}</h1>
            {!isSignIn && (<input type="text" placeholder="Full Name" className="border border-b-2 rounded-md p-3 my-4 w-full  bg-gray-700 text-white"></input>)}
            <input type="text" placeholder="Email Address" className="border border-b-2 rounded-md p-3 my-4 w-full  bg-gray-700 text-white"></input>
            <input type="passwprd" placeholder="Password" className="border border-b-2 rounded-md p-3 my-4 w-full bg-gray-700 text-white"></input>
            <button className="bg-red-600 p-3 my-3 text-white rounded-lg w-full">Sign In</button>
            <p className="p-3 text-white cursor-pointer hover:underline" onClick={toggleForm}>
                {isSignIn ? 
                'New to Netflix? Sign Up Now' : 'Already registered. Sign In now'}</p>
        </form>
        </>
    )
}

export default SignIn