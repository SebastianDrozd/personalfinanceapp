import React from "react";
import "./Header.css";
import office from "../../assets/office2.png";
const Header = () => {
  return (
    <>
      <div className="header-outer-container">
        <div className="header-text-content">
            <p className="header-welcome-welcome">Welcome to My Pay!</p>
            <p className="header-welcome-sub">Your daily source for financial keeping and other shit that you wanna do sup with it bro.Find out what keeps people coming back!</p>
            <button className="header-button">Get Started</button>
        </div>
        <div className="header-image">
            <img src={office} alt="" />
        </div>
   
      </div>
     
      
    </>
  );
};

export default Header;
