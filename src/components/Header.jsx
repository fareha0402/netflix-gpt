import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
function Header(){
    const user = useSelector(store => store.user)
    const navigate = useNavigate()
    const handleSignOut = () => {

signOut(auth).then(() => {
  // Sign-out successful.
  navigate('/')
}).catch((error) => {
  // An error happened.
  console.log(error)
  navigate('/error')
});

    }
    return(
        <div className="absolute m-3 bg-gradient-to-b z-10  from-black w-screen flex justify-between">
        <img className="m-4 w-[200px]" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"></img>
        {user && <div className="flex p-3">
       <img className="w-10 h-10 mt-4" src={user.photoURL}></img>
        <button className="font-bold text-white cursor-pointer" onClick={handleSignOut}>(Sign Out)</button>
        </div>}
        </div>
    ) 
}

export default Header