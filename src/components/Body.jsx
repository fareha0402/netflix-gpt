import { BrowserRouter, Route, Routes } from "react-router"
import SignIn from "./SignIn"
import Browse from "./Browse"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase.config"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"


function Body(){
    const dispatch = useDispatch()
    // check if auth state
    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName,photoURL} = user;
              console.log(user,uid)
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            } else {
                dispatch(removeUser())
              // User is signed out
              // ...
            }
          });
    },[])
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn/>}></Route>
            <Route path="/browse" element={<Browse/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Body