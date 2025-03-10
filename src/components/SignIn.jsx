import { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

function SignIn(){
    const [isSignIn,setISignIn] = useState(true)
    const [errorMessage ,setErrorMessage] = useState(null)
    const email = useRef(null)
    const password = useRef(null)
    const fname = useRef(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const toggleForm = () =>{
        setISignIn(!isSignIn)
    }

    const handleForm = (e) => {
        e.preventDefault()
        console.log(email.current.value)
        console.log(password.current.value)
        const errortext = validateForm(email.current.value,password.current.value)
        setErrorMessage(errortext)
        if(errortext) return
        // Sign up logic
        if(!isSignIn){
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user)
          updateProfile(user, {
            displayName: fname.current.value, photoURL: "https://avatars.githubusercontent.com/u/63733435?v=4"
          }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
          }).catch((error) => {
            console.log(error)
          });
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}` )
        });
    }
    else{
        // Sign In logic
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate('/browse')
    // We will use onAuthStateChanged API from Firebase to track the changes in state(login/logout /sign out)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(`${errorCode} - ${errorMessage}` )
  });
    }
    
    }

    return(
        <>
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"></img>
        </div>
        <form className="absolute p-10 bg-black w-4/12 mx-auto my-36 right-0 left-0 opacity-80">
        <h1 className=" text-white text-3xl font-bold">{isSignIn? 'Sign In' : 'Sign UP'}</h1>
            {!isSignIn && (<input type="text" placeholder="Full Name" ref={fname} className="border border-b-2 rounded-md p-3 my-4 w-full  bg-gray-700 text-white"></input>)}
            <input type="text" placeholder="Email Address" ref={email} className="border border-b-2 rounded-md p-3 my-4 w-full  bg-gray-700 text-white"></input>
            <input type="password" placeholder="Password" ref={password} className="border border-b-2 rounded-md p-3 my-4 w-full bg-gray-700 text-white"></input>
            <button className="bg-red-600 p-3 my-3 text-white rounded-lg w-full" onClick={handleForm}>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
            <p className="font-bold text-red-600">{errorMessage}</p>
            <p className="p-3 text-white cursor-pointer hover:underline" onClick={toggleForm}>
                {isSignIn ? 
                'New to Netflix? Sign Up Now' : 'Already registered. Sign In now'}</p>
        </form>
        </>
    )
}

export default SignIn