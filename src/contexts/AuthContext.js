import React, {useContext, useState, useEffect} from "react";
import {auth} from '../firebase/firebase'

const AuthContext = React.createContext()

const useAuth = () =>{
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) =>{

    const [currentUser, setCurrentUser] = useState()

    const signup = (email, password) => {
       return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
       const unsubscribe = auth.onAuthStateChange(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup
    }

    return(
        <AuthContext.Provider value ={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default useAuth