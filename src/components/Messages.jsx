import React, { useEffect, useRef } from 'react'
import { useMessages } from '../contexts/MessagesProvider'
import Message from './Message'

export default function Messages() {
    const scrollRef = useRef()
    const { messages } = useMessages();
    useEffect(()=>{
        scrollRef.current.scrollIntoView({
            behavior: "smooth"
        })
    },[messages])
    // console.log(messages)
    return (
        <div className="messages-container">
            {messages
            .map((message, index) => {
                return (
                    <Message message={message} key={index} />
                )
            })}
            <div ref={scrollRef}></div>
        </div>
    )
}
