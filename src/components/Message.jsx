import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthProvider'
import { TimeConverter } from '../hooks/timeConverter';

const language = navigator.language;
const options = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
};

export default function Message({ message }) {
    const {currentUser} = useAuth()
    const timeConverter = (date) =>{
        let newDate = new Date(date)
        .toLocaleString(language, options)
        return newDate;
    }
    return (
        <div className="message">
            <div className="user-icon">
                <img src={message.user_icon} alt={`${message.user_icon}'s icon`} />
            </div>
            <div className="message-container">
                <div className="message-text">
                    {message.message}
                </div>
                <div className="message-details">
                    {message.user == currentUser.profile.given_name || 
                    message.user == currentUser.profile.name ?
                    "You " :
                    `${message.user} `
                    } 
                    - {timeConverter(message.date)}
                </div>
            </div>
        </div>
    )
}
