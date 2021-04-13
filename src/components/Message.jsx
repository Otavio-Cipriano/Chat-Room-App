import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthProvider'

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
        let newDate = new Date(date * 1000)
        .toLocaleString(language, options)
        return newDate;
    }
    const isMine = currentUser?.profile.given_name == message.user ||
    currentUser?.profile.name == message.user? true : false; 
    return (
        <div className={`message ${isMine ? 'reverse-message': null}`}>
            <div className="user-icon">
                <img src={message.user_icon} alt={`${message.user_icon}'s icon`} />
            </div>
            <div className="message-container">
                <div className={`message-text ${
                    isMine ? 
                'mine-message': 'not-mine-message'}`}>
                    {message.message}
                </div>
                <div className="message-details">
                    {isMine ?
                    "You " :
                    `${message.user} `
                    } 
                    - {timeConverter(message.date?.seconds)}
                </div>
            </div>
        </div>
    )
}
