import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/store/userSlice";
import { clearGptResults, toggleGptSearchView } from "../utils/store/gptSlice";
import { LOGO_URL, SUPPORTED_LANG } from "../utils/constants";
import { setLanguagePreference } from "../utils/store/configSlice";
function Header() {
  const user = useSelector((store) => store.user);
  const showLangOption = useSelector((store) => store.gpt?.showGptSearch)
  const langVal = useSelector((store) => store.config?.langSelected)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error");
      });
  };
  const showGPTSearch = () =>{
    dispatch(toggleGptSearchView())
    dispatch(clearGptResults())
  }
  // check if auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
        // ...
      }
    });
    // unsubscribe the onAuthChange call
    return () => unsubscribe()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSelectedLanguage = (e) => {
    dispatch(setLanguagePreference(e.target.value))
  }
  return (
    <div className="absolute bg-gradient-to-b z-10  from-black w-screen flex justify-between">
      <img
        className="m-4 w-[150px]"
        src={LOGO_URL}
      ></img>
      {user && (
        <div className="flex p-3">
           {showLangOption && <select className="m-5 px-4 rounded-md bg-gray-500 text-white" onChange={handleSelectedLanguage}>
            {SUPPORTED_LANG.map((selected) => <option key={selected.name} value={selected.name}>{selected.value}</option>)}
          </select>}
          <button className="p-2 mx-2 my-4 bg-orange-400 rounded-lg text-white cursor-pointer" onClick={showGPTSearch}>{showLangOption? 'Home Page': 'GPT Search'}</button>
          <img className="w-10 h-10 mt-4" src={user.photoURL}></img>
          <button
            className="font-bold text-white cursor-pointer"
            onClick={handleSignOut}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
