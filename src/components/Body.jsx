import { BrowserRouter, Route, Routes } from "react-router"
import SignIn from "./SignIn"
import Browse from "./Browse"

function Body(){
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