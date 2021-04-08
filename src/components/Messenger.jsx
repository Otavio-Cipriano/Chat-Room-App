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
        if(e){e.preventDefault()}
        if(message.length > 0 && message[0] != "\n"){
            sendMessage(message)
            setMessage('')
        }
        textRef.current.focus()
    }
    const handleKeyPress = (e) => {
        if(e.key == 'Enter'){
            handleSubmit()
        }
        if(e.shiftKey && e.key =='Enter'){
            handleSubmit()
        }
    }
    return (
        <div className="messenger">
            <form onSubmit={handleSubmit}>
                <textarea onKeyPress={handleKeyPress} ref={textRef} onChange={e => setMessage(e.currentTarget.value)} value={message} />
                <button type="submit"> <IoSend /> </button>
            </form>
        </div>
    )
}
