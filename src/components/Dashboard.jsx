import React from 'react'
import { useAuth } from '../contexts/AuthProvider'


export default function Dashboard({handleLogout}) {
    const {signOut} = useAuth()
    const handleClick = () =>{
        handleLogout(false)
        signOut()
    }
    return (
        <div>
            <h2>DASHBOARD</h2>
            <button onClick={handleClick}>Log out</button>
        </div>
    )
}
