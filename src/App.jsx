import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from "./pages/Aboutus";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile"
export default function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/sign-in" element={<Signin/>}/>
    <Route path="/sign-Up" element={<SignUp/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Profile" element={<Profile/>}/>
  </Routes>
  </BrowserRouter>
  )
}
