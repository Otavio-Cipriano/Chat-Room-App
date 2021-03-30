import React, { useState } from 'react'
import Message from './Message'
import './ChatRoom.css'
import { useMessages } from '../contexts/MessagesProvider'

export default function ChatRoom() {
    const { messages, sendMessage } = useMessages();
    const [message, setMessage] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(message)
        sendMessage(message)
        setMessage('')
    }

    return (
        <div className="chat-room">
            <div className="messages-container">
                {messages.map((message, index) => {
                    return (
                        <Message message={message} key={index} />
                    )
                })}
            </div>
            <div className="messenger">
                <form onSubmit={handleSubmit}>
                    <textarea onChange={e=> setMessage(e.currentTarget.value)} value={message}></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}
