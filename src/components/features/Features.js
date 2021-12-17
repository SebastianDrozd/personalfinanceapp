import React from 'react'
import './Features.css'
import map from '../../assets/map.png'
import map2 from '../../assets/map2.png'
import map3 from '../../assets/map3.png'
import map4 from '../../assets/map4.png'
const Features = () => {
    return (
        <div >
            <div className="features-row">
                <div className="item-container">
                    <div className='item-image'><img src={map} alt="" /></div>
                    <div className="className-item-texts">
                        <p className='total-balance'>Total Balance</p>
                        <p className='balance'>$80,442.93</p>
                    </div>
                </div>
                <div className="item-container">
                    <div className='item-image'><img src={map2} alt="" /></div>
                    <div className="className-item-texts">
                        <p className='total-balance'>Net Income</p>
                        <p className='balance'>$51,334.32</p>
                    </div>
                </div>
                <div className="item-container">
                    <div className='item-image'><img src={map3} alt="" /></div>
                    <div className="className-item-texts">
                        <p className='total-balance'>Total Balance</p>
                        <p className='balance'>$80,442.93</p>
                    </div>
                </div>
                <div className="item-container">
                    <div className='item-image'><img src={map4} alt="" /></div>
                    <div className="className-item-texts">
                        <p className='total-balance'>Total Balance</p>
                        <p className='balance'>$80,442.93</p>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Features
