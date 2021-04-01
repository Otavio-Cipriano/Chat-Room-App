import React, {useEffect, useRef, useState} from 'react'
import {IoSend} from 'react-icons/io5'
import { useMessages } from '../contexts/MessagesProvider';


export default function Messenger() {
    const { sendMessage } = useMessages();
    const [message, setMessage] = useState('');
    const textRef = useRef()

    useEffect(()=>{
        textRef.current.focus()
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(message.length > 0){
            sendMessage(message)
            setMessage('')
        }
        textRef.current.focus()
    }
    return (
        <div className="messenger">
            <form onSubmit={handleSubmit}>
                <textarea ref={textRef} onChange={e => setMessage(e.currentTarget.value)} value={message} />
                <button type="submit"> <IoSend /> </button>
            </form>
        </div>
    )
}
