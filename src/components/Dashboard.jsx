import React from 'react'
import { useAuth } from '../contexts/AuthProvider'
import { MessagesProvider } from '../contexts/MessagesProvider'
import ChatRoom from './ChatRoom'
import Navbar from './Navbar'


export default function Dashboard() {
    const { signOut } = useAuth()
    const handleClick = () => {
        signOut()
    }
    return (
        <div className="dashboard">
            <Navbar />
            <MessagesProvider>
                <ChatRoom />
            </MessagesProvider>
        </div>
    )
}
