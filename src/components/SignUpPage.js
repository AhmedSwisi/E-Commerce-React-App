import React, { useState} from "react";
import { TextField, Button, Grid, InputLabel, Typography} from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase/firebase"
import theme from "../styles/Theme";
import {ThemeProvider} from "@mui/material/styles";


const SignUpPage = () =>{


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSignUp = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log(userCredentials)
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <div>
            <ThemeProvider theme = {theme}>
            <form  onSubmit={handleSignUp}>
                <Grid container direction="column" alignContent="center" spacing={2} justifyContent="center"  >
                    <Grid item display="flex" justifyContent="center" alignItems="center">
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
                        <Button variant="contained" type="submit" fullWidth sx={{width:480}} >Sign Up</Button>
                    </Grid>
                </Grid>
            </form>
            </ThemeProvider>
        </div>
    )
}

export default SignUpPage
