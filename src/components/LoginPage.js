import React, {useState} from "react";
import { TextField, Button, Grid, InputLabel, Typography } from "@mui/material";
import {auth} from "../firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import {ThemeProvider} from "@mui/material/styles";
import theme from "../styles/Theme";

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log(userCredentials)
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <div>
        <ThemeProvider theme = {theme}>
        <form  onSubmit={handleSignIn}>
            <Grid container direction="column" alignContent="center" spacing={2} justifyContent="center"  >
                <Grid item display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h3" component="h3">
                Log In
                </Typography>
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
                <Grid item display="flex" justifyContent="center" alignItems="center" xs={9}>
                    <Button variant="contained" type="submit" fullWidth sx={{width:480}} >Log In</Button>
                </Grid>
            </Grid>
        </form>
        </ThemeProvider>
    </div>
)}

export default LoginPage