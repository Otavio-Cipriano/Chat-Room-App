import React from 'react'
import { useAuth } from '../contexts/AuthProvider'
import {BiExit} from 'react-icons/bi'
import './Navbar.css'

export default function Navbar() {
    const { currentUser } = useAuth()
    return (
        <div className="navbar">
            <div className="user-info">
                <div className="user-avatar">
                    <img src={currentUser.profile.picture}
                        alt={`${currentUser.profile.given_name ?
                            currentUser.profile.given_name :
                            currentUser.profile.name}'s Avatar`} />
                </div>
                <div className="user-name">
                    {currentUser.profile.given_name ?
                        currentUser.profile.given_name :
                        currentUser.profile.name}
                </div>
            </div>
            <div className="user-tools">
                <div className="exit-button"><BiExit/></div>
            </div>
        </div>
    )
}
