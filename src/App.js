import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from "./containers/navbar/Navbar";
import WelcomeContainer from "./containers/welcomeContainer/WelcomeContainer";
import { validateToken } from "./helpers/Connections";
import { setUserStatus } from "./redux/slices/userSlice";
import Bank from "./routes/Bank";
import Dashboard from "./routes/Dashboard";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Setup from "./routes/Setup";
import Signup from "./routes/Signup";
import Welcome from "./routes/Welcome";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.getItem("token")){
      validateToken(localStorage.getItem("token")).then(response => {
        if(response.data.status === 'valid'){
          console.log("app loaded", response)
          dispatch(setUserStatus({username: response.data.username,loggedIn: true}))
          return;
        }
        else{
          localStorage.clear()
          return;
        }
      }).catch(error => {
          console.log(error)
      })
    }
    else{
      dispatch(setUserStatus({username: "",loggedIn: false}))
    }
  },[])
  return (
    <>
     <BrowserRouter>
    <Navbar/>
    
    <Routes>
  
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={ <Dashboard/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/setup" element={<Setup/>}>
      
         <Route path="welcome" element={<WelcomeContainer/>} />
         <Route path="bank" element={<Bank/>} />
      </Route>
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
