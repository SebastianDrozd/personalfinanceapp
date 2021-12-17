import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { Link as Links, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/logo2.png";
import { useSelector } from "react-redux";
const Navbar = () => {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const navigate = useNavigate()
  const logout = () => {
      localStorage.removeItem("token")
      navigate('/')
  }
  return (
    <>
      <div id="navbar" className="nav-outer-container">
        <div className="nav-brand">
          <img src={logo} alt="" />
        </div>
        <div className="nav-links">
        <a href="">
            <Link to="/">Home</Link>
          </a>

          <Links
            activeClass="active"
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {" "}
            <a href="">Features</a>
          </Links>
          <a href="">About</a>
          {loggedIn == true &&   <a href="">
            <Link to="/dashboard">My Dashboard</Link>
          </a>}

          {!loggedIn && <a href="">
            <Link to="signup">Sign up</Link>
          </a> }
          {!loggedIn && <a href="">
            <Link to="login">Log in</Link>
          </a> }
          {loggedIn == true &&   <a onClick={logout} href="">
          logout
          </a>}
          
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
