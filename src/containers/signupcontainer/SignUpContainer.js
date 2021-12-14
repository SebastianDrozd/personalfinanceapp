import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignupUser } from '../../helpers/Connections'
import './SignUpContainer.css'
const SignUpContainer = () => {
    const navigate = useNavigate()
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passCon,setPassCon] = useState("")

    const saveUserClick = () => {
       SignupUser({username: username,password: password,email: email}).then(response => {
            console.log(response)
            navigate('/login')
        }).catch(error => console.log(error))
    }
    return (
        <>
            <div className="signup-outer-container">
                <p>username</p>
              
                <input onChange={(e) => setUsername(e.target.value)} type="text" name="" id="" />
                <p>Email</p>
                <input onChange={(e) => setEmail(e.target.value)} type="text" name="" id="" />
                <p>password</p>
                <input onChange={(e) => setPassword(e.target.value)} type="text" name="" id="" />
                <p>Confirm Password</p>
                <input onChange={(e) => setPassCon(e.target.value)} type="text" name="" id="" />
                <button onClick={saveUserClick}>Submit</button>
                <br />
                {username}
                <br />
                {email}
                <br />
                {password}
                <br />
                {passCon}
            </div>
        </>
    )
}

export default SignUpContainer
