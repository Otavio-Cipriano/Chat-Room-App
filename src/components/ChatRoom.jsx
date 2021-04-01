import React, { useState } from 'react'
import Message from './Message'
import './ChatRoom.css'
import { useMessages } from '../contexts/MessagesProvider'
import Messenger from './Messenger'

export default function ChatRoom() {
    const { messages } = useMessages();
    return (
        <div className="chat-room">
            <div className="messages-container">
                {messages.map((message, index) => {
                    return (
                        <Message message={message} key={index} />
                    )
                })}
            </div>
                <Messenger/>
        </div>
    )
}
