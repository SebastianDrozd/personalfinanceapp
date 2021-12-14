import React from "react";
import "./Features.css";
import grow from '../../assets/grow.svg'
import grow2 from '../../assets/grow2.svg'
import grow3 from '../../assets/grow3.svg'
const Features = () => {
  return (
    <>
      <div id="features" className="features-outer-container">
        <p className="features-title">Features</p>
        <p className="features-sub">
          Check out all this amazing company has to offer with the latest
          technogloy avaibale
        </p>
        <div className="feature-cards">
        
          <div className="feature-card">
          <div className="feature-image">
            <img src={grow} alt="" />
          </div>
              <p className="feature-card-title">Money Management</p>
              <p className="feature-card-sub">Unlock the potential to access all your money at whenever you want whenver u can do it with it sup</p>
          </div>
          <div className="feature-card">
          <div className="feature-image">
            <img src={grow2} alt="" />
          </div>
              <p className="feature-card-title">Money Management</p>
              <p className="feature-card-sub">Unlock the potential to access all your money at whenever you want whenver u can do it with it sup</p>
          </div>
          <div className="feature-card">
          <div className="feature-image">
            <img src={grow3} alt="" />
          </div>
              <p className="feature-card-title">Money Management</p>
              <p className="feature-card-sub">Unlock the potential to access all your money at whenever you want whenver u can do it with it sup</p>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Features;
