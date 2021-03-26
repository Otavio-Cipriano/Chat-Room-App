import React, { useContext, useEffect, useState } from 'react'
import { auth, provider } from '../firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [logged, setLogged] = useState(false)

    const signInWithGoogle=()=>{
        auth.signInWithPopup(provider).then((result)=>{
            setCurrentUser({
                profile: result.additionalUserInfo.profile,
                isNewUser: result.additionalUserInfo.isNewUser,
                credential: result.credential
            })
        })
        setLogged(true)
    }

    useEffect(()=>{
       const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
        })
        return unsubscribe
    },[])

    const signOut = () =>{
        auth.signOut();
        setCurrentUser();
        setLogged(false)
    }
    const value = {
        signInWithGoogle,
        signOut,
        currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
