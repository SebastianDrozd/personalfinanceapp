import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setAccountStatus } from '../helpers/Connections';
import { setPage } from '../redux/slices/userSlice';

const AdditionalInfo = () => {
    const username = useSelector(state => state.user.username)
    const dispatch = useDispatch()
    useEffect(() => {
        
        dispatch(setPage({ page: "info" }));
      }, []);
    const navigate = useNavigate()
    const handleFinish = () => {
        let jwt = localStorage.getItem("token");
    
        setAccountStatus(username,jwt).then(response =>{
            console.log(response)
            navigate('/dashboard')
        }
        
        
        )

        
    }
    return (
        
        <div>
            Addition info
            <button onClick={handleFinish}>Finish</button>
        </div>
    )
}

export default AdditionalInfo
