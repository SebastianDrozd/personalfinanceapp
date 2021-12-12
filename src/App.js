import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from "./containers/navbar/Navbar";
import Bank from "./routes/Bank";
import Dashboard from "./routes/Dashboard";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Setup from "./routes/Setup";
import Signup from "./routes/Signup";
import Welcome from "./routes/Welcome";

function App() {
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
         <Route path="welcome" element={<Welcome/>} />
         <Route path="bank" element={<Bank/>} />
      </Route>
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
