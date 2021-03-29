import React from 'react'
import { useAuth } from '../contexts/AuthProvider'
import ChatRoom from './ChatRoom'
import Navbar from './Navbar'


export default function Dashboard() {
    const {signOut} = useAuth()
    const handleClick = () =>{
        signOut()
    }
    return (
        <div className="dashboard">
            <Navbar/>
            <ChatRoom/>
        </div>
    )
}
