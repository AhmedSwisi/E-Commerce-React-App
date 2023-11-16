import React, {useState, useEffect} from "react";
import { TextField, Button, Grid, InputLabel, Typography } from "@mui/material";
import { auth, logInWithEmailAndPassword} from "../firebase/firebase";
import {ThemeProvider} from "@mui/material/styles";
import theme from "../styles/Theme";
import {useAuthState} from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        //if (user) navigate("/")
    },[user, navigate])

    // const handleSignIn = (e) => {
    //     e.preventDefault();
    //     signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredentials) => {
    //         console.log(userCredentials)
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }

    return(
        <div>
        <ThemeProvider theme = {theme}>
            <Grid container direction="column" alignContent="center" spacing={0} justifyContent="center" paddingTop={"64px"} paddingBottom={"96px"}  >
                <Grid item display="flex" justifyContent="center" alignItems="center" padding={"0px, 0px, 0px, 0px"} paddingBottom={"32px"}>
                <Typography variant="h3" component="h3">
                Log In
                </Typography>
                </Grid>
                <Grid item paddingBottom={"24px"}>
                    <Grid item paddingBottom={"8px"}>
                        <InputLabel >
                            Email*
                        </InputLabel>
                    </Grid>
                    <TextField  id="email" value = {email} fullWidth  variant="outlined" onChange={e => setEmail(e.target.value)}/>
                </Grid>
                <Grid item paddingBottom={"24px"} >
                    <Grid item paddingBottom={"8px"}>
                        <InputLabel sx={{color:"black"}}  >
                            Password*
                        </InputLabel>
                    </Grid>
                    <TextField  id="password" value = {password} fullWidth  variant="outlined" onChange={e => setPassword(e.target.value)} />
                </Grid>
                <Grid item display="flex" justifyContent="center" alignItems="center" xs={9} paddingBottom={"24px"}>
                    <Button variant="contained" type="submit" fullWidth sx={{width:480}} onClick={() => logInWithEmailAndPassword(email, password)} >Log In</Button>
                </Grid>
                <Grid item display="flex" justifyContent="center" alignItems="center">
                    <Typography variant="body1">
                        Forgot your password?
                    </Typography>
                </Grid>
            </Grid>
        </ThemeProvider>
    </div>
)}

export default LoginPage