import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { useAuth } from '../contexts/AuthProvider'
import {AiFillGoogleCircle} from 'react-icons/ai'

export default function Signin() {
    const { signInWithGoogle, logged } = useAuth()
    const history = useHistory()
    const handleClick = async () => {
        await signInWithGoogle()
    }
    useEffect(() => {
        if (logged) {
            return history.push('/Dashboard')
        }
    }, [logged])
    return (
        <div className="login">
            <div className="login-form">
                <h2>Login with Google</h2>
                <button onClick={handleClick}><AiFillGoogleCircle/>Google</button>
            </div>
        </div>
    )
}
