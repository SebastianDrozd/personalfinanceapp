import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setPage } from '../../redux/slices/userSlice';
import './WelcomeContainer.css'
const WelcomeContainer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleContinue = () => {
        navigate('/setup/bank')
    }
    useEffect(() => {
        dispatch(setPage({page: 'welcome'}))
    },[])
    return (
        <>
           <div className="welcome-container-wrapper">
               <p className="welcome-welcome-message">Welcome to MyPay!</p>
               <p className="welcome-second-message">Dont worry, usually finance apps take a lot of time to set up! With us its quick and easy!</p>
               <button onClick={handleContinue} className='welcome-continue-button'>Get Started</button>
           </div>
        </>
    )
}

export default WelcomeContainer
