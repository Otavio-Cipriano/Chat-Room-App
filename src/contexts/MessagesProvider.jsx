import React, { useContext, useEffect, useState } from 'react'
import { db } from '../firebase'
import { useAuth } from './AuthProvider'

const MessagesContext = React.createContext()

export function useMessages(){
    return useContext(MessagesContext)
}

export function MessagesProvider({children}){
    const [messages, setMessages] = useState([])
    const {currentUser} = useAuth()
    const collection = db.collection('Messages')
    .orderBy("date", 'desc')

    const getMessages = () =>{
        collection.onSnapshot((querySnapshot)=>{
            const items = [];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data())
            })
            console.log(items)
            setMessages(items)
        })
    }

    const sendMessage = (message) =>{
        let date = new Date().toUTCString()
        let newMessage = {
            user: currentUser.profile.given_name?
                    currentUser.profile.given_name:
                    currentUser.profile.name,
            user_icon: currentUser.profile.picture,
            message: message,
            date: date
        }
        collection
        .doc()
        .set(newMessage)
        .catch((err) =>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getMessages()
    },[])

    const value = {
        messages,
        sendMessage
    }

    return (
        <MessagesContext.Provider value={value}>
            {children}
        </MessagesContext.Provider>
    )
}