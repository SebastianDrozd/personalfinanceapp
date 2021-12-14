import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setPage } from '../../redux/slices/userSlice';


const BankContainer = () => {
    
    const dispatch = useDispatch();
useEffect(() => {
    
    dispatch(setPage({page: 'bank'}))
},[])
    return (
        <div>
            
        </div>
    )
}

export default BankContainer
