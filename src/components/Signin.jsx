import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { useAuth } from '../contexts/AuthProvider'

export default function Signin() {
    const { signInWithGoogle, logged } = useAuth()
    const history = useHistory()
    const handleClick = async () => {
        await signInWithGoogle()
        console.log(logged)
        // if(logged){
        // console.log(logged)
        return history.push('/Dashboard')
        // }
    }
    useEffect(() => {
        if (logged) {
            return history.push('/Dashboard')
        }
    }, [])
    return (
        <div className="login">
            <div className="login-form">
                <h2>Login with Google</h2>
                <button onClick={handleClick}>Log In with Google</button>
            </div>
        </div>
    )
}
