import React, { useState } from 'react'
import './ChatRoom.css'
import Messenger from './Messenger'
import Messages from './Messages'
import { useMessages } from '../contexts/MessagesProvider'
import LoadingMessages from './LoadingMessages'

export default function ChatRoom() {
    const { loading } = useMessages()
    return (
        <div className="chat-room">
            {loading ? <LoadingMessages/>:<Messages/>}
            <Messenger />
        </div>
    )
}
