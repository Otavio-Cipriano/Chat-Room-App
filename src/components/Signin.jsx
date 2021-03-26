import React from 'react'
import {useAuth} from '../contexts/AuthProvider'

export default function Signin({handleLogin}) {
    const {signInWithGoogle} = useAuth()
    const handleClick = () =>{
        signInWithGoogle()
        handleLogin(true)
    }
    return (
        <div className="login">
            <h2>Login</h2>
            <form>
            </form>
            <button onClick={handleClick}>Log In with Google</button>
        </div>
    )
}
