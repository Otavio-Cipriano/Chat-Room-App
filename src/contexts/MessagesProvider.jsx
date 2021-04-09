import React, { useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { db } from '../firebase';
import { useAuth } from './AuthProvider';

const MessagesContext = React.createContext()

export function useMessages(){
    return useContext(MessagesContext)
}

export function MessagesProvider({children}){
    const [messages, setMessages] = useState([]);
    const {currentUser} = useAuth();
    const [loading, setLoading] = useState(true)
    const collection = db.collection('Messages');

    const getMessages = () =>{
        collection.orderBy("date", 'asc').limit(30).onSnapshot((querySnapshot)=>{
            const items = [];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data())
            })
            setMessages(items)
            setLoading(true)
        })
    }

    const sendMessage = (message) =>{
        let newMessage = {
            user_id: currentUser.uid,
            user: currentUser.profile.given_name?
                    currentUser.profile.given_name:
                    currentUser.profile.name,
            name: currentUser.profile.name,
            user_icon: currentUser.profile.picture,
            message: message,
            date: firebase.firestore.FieldValue.serverTimestamp()
        }
        collection.doc().set(newMessage).catch((err) =>{
            console.log(err);
        });
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