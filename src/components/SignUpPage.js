import React, { useEffect,useState} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { TextField, Button, Grid, InputLabel, Typography, Link} from "@mui/material";
import { auth, registerWithEmailAndPassword } from "../firebase/firebase"
import { useNavigate } from "react-router-dom";
import theme from "../styles/Theme";
import {ThemeProvider} from "@mui/material/styles";


const SignUpPage = () =>{


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()

    const signUp = () => {
        if(!name) alert("please enter your name")
        registerWithEmailAndPassword(name, email, password)
    }

    useEffect(() => {
        if (loading) return;
        //if (user) navigate("/")
    }, [user, loading, navigate])

    // const handleSignUp = (e) => {
    //     e.preventDefault()
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredentials) => {
    //         console.log(userCredentials)
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }

    return(
        <div>
            <ThemeProvider theme = {theme}>
                <Grid container direction="column" alignContent="center" spacing={2} justifyContent="center" paddingTop={"64px"} paddingBottom={"96px"}  >
                    <Grid item display="flex" justifyContent="center" alignItems="center" >
                    <Typography variant="h3" component="h3">
                    Sign Up
                    </Typography>
                    </Grid>
                    <Grid item >
                        <InputLabel>
                            Name*
                        </InputLabel>
                        <TextField  id="name" value = {name} fullWidth  variant="outlined" onChange={e => setName(e.target.value)} />
                        
                    </Grid>
                    <Grid item>
                        <InputLabel>
                            Email*
                        </InputLabel>
                        <TextField  id="email" value = {email} fullWidth  variant="outlined" onChange={e => setEmail(e.target.value)}/>
                    </Grid>
                    <Grid item>
                        <InputLabel sx={{color:"black"}} >
                            Password*
                        </InputLabel>
                        <TextField  id="password" value = {password} fullWidth  variant="outlined" onChange={e => setPassword(e.target.value)} />
                    </Grid>
                    <Grid item>
                        <InputLabel>
                            Confirm Password*
                        </InputLabel>
                        <TextField  id="password-confirm" value = {confirmPassword} fullWidth  variant="outlined" onChange={e => setConfirmPassword(e.target.value)} />
                    </Grid>
                    <Grid item display="flex" justifyContent="center" alignItems="center" xs={9}>
                        <Button variant="contained"fullWidth sx={{width:480}} onClick={signUp} >Sign Up</Button>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default SignUpPage
