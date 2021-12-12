import React, { useState } from 'react'
import './SignUpContainer.css'
const SignUpContainer = () => {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passCon,setPassCon] = useState("")
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
                <button>Submit</button>
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
