import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginuser } from '../../helpers/Connections'
import { setUserStatus } from '../../redux/slices/userSlice'
import './LoginContainer.css'
const LoginContainer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const loginUserClick = (e)=> {
        e.preventDefault()
        loginuser({username: username,password: password}).then(
            response => {
                console.log("loginResponse",response);
                localStorage.setItem("token",response.data.token);
                dispatch(setUserStatus({username: response.data.username,loggedIn: true}))
                if(response.data.accountSetUp){
                    navigate('/dashboard')
                }
                else{
                    navigate('/setup/welcome')
                }
              
            }
        ).catch(error => console.log(error))
    }
    return (
        <div>
             <div className="login-outer-container">
                <p>username</p>
              
                <input onChange={(e) => setUsername(e.target.value)} type="text" name="" id="" />
              
                <p>password</p>
                <input onChange={(e) => setPassword(e.target.value)} type="text" name="" id="" />
               
                <button onClick={loginUserClick}>Submit</button>
                <br />
                {username}
                <br />
           
                <br />
                {password}
                <br />
               
            </div>
        </div>
    )
}

export default LoginContainer
