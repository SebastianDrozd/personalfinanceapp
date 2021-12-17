import React from 'react'
import './SlantedDiv.css'
import win from '../../assets/win.svg'
import cert from '../../assets/cert.svg'
import fans from '../../assets/fans.svg'
const SlantedDiv = () => {
    return (
        <>
        <div style={{padding: '8em 10em'}}>
            <div className="slanted-main-outer-container">
   
               <div className="slanted-content">
        
                   <div className="slanted-border-box">
                       <img src={win} alt="" />
                       <div className="slanted-inner-text">
                           <p className='slanted-inner-title'>Stay on top of all your financial </p>
                           <p className='slanted-inner-sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Lorem mollis aliquam ut porttitor leo. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Pulvinar neque laoreet suspendisse interdum consectetur libero id</p>
                       </div>
                   </div>
                   <div className="slanted-border-box">
                   <div className="slanted-inner-text">
                           <p className='slanted-inner-title'>Stay on top of all your financial </p>
                           <p className='slanted-inner-sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Lorem mollis aliquam ut porttitor leo. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Pulvinar neque laoreet suspendisse interdum consectetur libero id</p>
                       </div>
                       <img src={cert} alt="" />
                     
                   </div>
                   <div className="slanted-border-box">
                       <img src={fans} alt="" />
                       <div className="slanted-inner-text">
                           <p className='slanted-inner-title'>Stay on top of all your financial </p>
                           <p className='slanted-inner-sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Lorem mollis aliquam ut porttitor leo. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Pulvinar neque laoreet suspendisse interdum consectetur libero id</p>
                       </div>
                   </div>
               </div>
            </div>
   
        </div>
       
        </>
    )
}

export default SlantedDiv
