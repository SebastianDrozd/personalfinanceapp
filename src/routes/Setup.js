import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import "../routes/Css/Setup.css";
const Setup = () => {
  const page = useSelector(state => state.user.page)
  console.log("page", page)
  return (
    <>
      <div className="setup-outer-container">
        <div className="setup-status-icons">
          <div className="status-icon">
            <p className={page === 'welcome' ? 'active-link' : ''}>Getting started</p>
          </div>
          <div className="status-icon">
            <p className={page === 'bank' ? 'active-link' : ''}>Bank Information</p>
          </div>
          <div className="status-icon">
            <p className={page === 'info' ? 'active-link' : ''}>Addition Information</p>
          </div>
        </div>
        <div className="setup-inner-container">
          <div className="outlet-wrapper">
            <Outlet />
          </div>
          <div className="right-wrapper">
              <div className="right-column">
                  <p>Getting started is easy! </p>
                  <br />
                  <p>Just add your bank account and you are on your way! </p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setup;
