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
    const [error, setError] = useState(false)

    const signInWithGoogle = async () => {
        await auth.signInWithPopup(provider).then((result) => {

            if (result) {
                setCurrentUser({
                    profile: result.additionalUserInfo.profile,
                    isNewUser: result.additionalUserInfo.isNewUser,
                    uid: result.user.uid
                })
            }
        }).catch(err =>{
            if (err) {
                setLogged(false)
                setError(true) 
                console.error(err);
            }
        })
        if(!error){
            setLogged(true)
        }
    }

    useEffect(() => {
        if (currentUser != undefined && currentUser != null) {
            setLogged(true)
        }
    }, [])

    const signOut = () => {
        auth.signOut();
        setCurrentUser();
        setLogged(false)
    }

    const value = {
        signOut,
        signInWithGoogle,
        currentUser,
        logged
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
