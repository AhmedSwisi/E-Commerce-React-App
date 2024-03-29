import React, {useState, useEffect} from "react";
import { auth } from "../firebase/firebase"; 
import { onAuthStateChanged, signOut} from "firebase/auth";

const AuthDetails = () => {

    const [authUser,setAuthUser] = useState(null)
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else{
                setAuthUser(null)
            }
            
        })
        return () => {
            listen()
        }
    }, [])

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log("sign out success")
        }).catch(error => console.log(error))
    }

    return(
        <div>
            {authUser ? <><p>{`Signed In as ${authUser.email}`}</p><button onClick={userSignOut}></button></>  : <p>Signed Out</p>}
        </div>
    )
}

export default AuthDetails
