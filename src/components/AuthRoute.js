import React, {useState, useEffect} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth"
import {useNavigate} from "react-router-dom"

const AuthRoute = (props) => {
    const {children} = props
    const auth = getAuth()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

  
    
    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if (user){
            setLoading(false);
        } else{
            console.log('unauthorized')
            navigate('/login')
        }

        if(loading){
            return <p>loading...</p>
        }

        return <>{children}</>
    })

    useEffect(() => {
        AuthCheck()
    }, [auth, AuthCheck])


    return(
        <div>

        </div>
    )
}

export default AuthRoute