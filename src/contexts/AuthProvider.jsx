import React, { useContext, useEffect, useState } from 'react'
import { auth, provider } from '../firebase'
import useLocalStorage from '../hooks/useLocalStorage'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useLocalStorage('User')
    const [logged, setLogged] = useState(false)

    const signInWithGoogle = async () => {
        await auth.signInWithPopup(provider).then((result) => {
            if(result){
                setCurrentUser({
                    profile: result.additionalUserInfo.profile,
                    isNewUser: result.additionalUserInfo.isNewUser,
                    uid: result.user.uid
                })
            }
        }).catch(err =>{ console.error(err)})
        await setLogged(true)
    }

    useEffect(()=>{
        if(currentUser != undefined){
            setLogged(true)
        }
    }, [])

    const signOut = () => {
        auth.signOut();
        setCurrentUser();
        setLogged(false)
    }

    const value = {
        signInWithGoogle,
        signOut,
        currentUser,
        logged
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
