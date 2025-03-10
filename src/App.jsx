import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import TitleCard from "./components/TitleCard";
import { Routes, Route, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";

function App () {

  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=> {
      if(user){
        console.log("Logged In");
        navigate('/');
      }else{
        console.log("Logged Out");
        navigate('/login');
      }
    })
  },[])
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player/>} />
      </Routes>
    </>
  );
}

export default App;