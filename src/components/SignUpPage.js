import React, { useEffect,useRef,useState} from "react";
import { useCreateUserWithEmailAndPassword, useAuthState} from "react-firebase-hooks/auth";
import { TextField, Button, Grid, InputLabel, Typography, Box, Alert} from "@mui/material";
import { auth, getAuthenticationErrorMessage } from "../firebase/firebase"
import { useNavigate } from "react-router-dom";


const SignUpPage = () =>{
    const initialErrorMessages = {
        nameMessage:null,
        emailMessage:null,
        confirmPasswordMessage:null
    }
    const [userAuth] = useAuthState(auth)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const [timer, setTimer] = useState()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [whiteSpaceMessage, setWhiteSpaceMessage] = useState(null)
    const [upperCaseMessage, setUpperCaseMessage] = useState(null)
    const [lowerCaseMessage, setLowerCaseMessage] = useState(null)
    const [digitMessage, setDigitMessage] = useState(null)
    const [symbolMessage, setSymbolMessage] = useState(null)
    const [lengthMessage, setLengthMessage] = useState(null)
    const [errorMessages, setErrors] = useState(initialErrorMessages)
    const textFieldForEmailRef = useRef(null)
    const textFieldForPasswordRef = useRef(null)
    const textFieldForConfirmPasswordRef = useRef(null)
    const navigate = useNavigate()
    const handleSignUp =  async (e) => {
        e.preventDefault()
        await createUserWithEmailAndPassword(email, password)
    }

    const isValidEmail = (email) => {
        let re =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let valid = re.test(email)
        if(valid === false){
            setErrors({
                ...errorMessages,
                emailMessage:"Please enter a valid mail Address (user@emailprovider.com)"
            })
        }
        else if(valid === true){
            setErrors({
                ...errorMessages,
                emailMessage:null
            })
        }
    }

    

    const isValidName = (name) => {
        if (name === ''){
            setErrors({
                ...errorMessages,
                nameMessage:"Name cannot be empty"
            })
        }
        else{
            setErrors({
                ...errorMessages,
                nameMessage:null
            })
        }
    }

    const isValidPassword = (e) => {
        const hasWhiteSpace = new RegExp( /^(?=.*\s)/)  
        const includesUpperCase = new RegExp(/[A-Z]/)
        const includesLowerCase = /^(?=.*[a-z])/
        const includesDigit = /^(?=.*[0-9])/
        const includesSymbol = /[*$@!#%&()^~{}]+/
        const isValidLength = /^.{8,16}$/

        if (hasWhiteSpace.test(e)){
            setWhiteSpaceMessage("Password must not contain any spaces")
        } else if(!hasWhiteSpace.test(e)){
            setWhiteSpaceMessage(null)
        }

        if (!includesUpperCase.test(e)){
            setUpperCaseMessage("Password must contain one upper case character")
        } else if(includesUpperCase.test(e)){
            setUpperCaseMessage(null)
        }

        if(!includesLowerCase.test(e)){
            setLowerCaseMessage("Password must contain one lower case character")
        } else if(includesLowerCase.test(e)){
            setLowerCaseMessage(null)
        }

        if(!includesDigit.test(e)){
            setDigitMessage("Password must contain one digit")
        } else if(includesDigit.test(e)){
            setDigitMessage(null)
        }

        if (!includesSymbol.test(e)){
            setSymbolMessage("Passwords must contain one special character or symbol")
        } else if(includesSymbol.test(e)){
            setSymbolMessage(null)
        }

        if(!isValidLength.test(e)){
            setLengthMessage("Password must be between 8 and 16 characters")
        } else if(isValidLength.test(e)){
            setLengthMessage(null)
        }
    }

    const samePassword = (e) =>{
        if (e !== password){
            setErrors({
                ...errorMessages,
                confirmPasswordMessage:"Passwords do not match"
            })
        } else{
            setErrors({
                ...errorMessages,
                confirmPasswordMessage:null
            })
        }
    }
    

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
        
    }
  
    useEffect(() => {
        if (userAuth) setTimeout(navigate("/"), 2000)
    }, [userAuth, loading, navigate])

    // const handleSignUp = (e) => {
    //     e.preventDefault()
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredentials) => {
    //     }).catch((error) => {
    //     })
    // }

    return(
        <div>
            <form onSubmit={handleSignUp}>
                <Grid >
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
                            {<Typography sx={{color:"red"}}>{errorMessages.nameMessage}</Typography>}
                            <TextField onBlur={() => isValidName(name)} type="input" id="name" value = {name} fullWidth  variant="outlined" onChange={e => setName(e.target.value)}
                            inputProps={{
                                onKeyDown: event => {
                                    const {key} = event;
                                    if(key === "Enter"){
                                        event.preventDefault()
                                        textFieldForEmailRef.current.focus()
                                    }
                                }
                            }}
                            />
                            
                        </Grid>
                        <Grid item>
                            <InputLabel>
                                Email*
                            </InputLabel>
                            {<Typography sx={{color:"red"}}>{errorMessages.emailMessage}</Typography>}
                            <TextField inputRef={textFieldForEmailRef} id="email" value = {email} type="email" fullWidth  variant="outlined" onChange={handleEmailChange}
                            inputProps={{
                                
                                onKeyDown: event => {
                                    clearTimeout(timer)
                                    const tempTimer = setTimeout(() => {
                                        isValidEmail(email)
                                    }, 1000)
                                    setTimer(tempTimer)
                                    const {key} = event;
                                    if(key === "Enter"){
                                        event.preventDefault()
                                        textFieldForPasswordRef.current.focus()
                                    }
                                }
                            }}
                            />
                        </Grid>
                        <Grid item>
                            <InputLabel sx={{color:"black"}} >
                                Password*
                            </InputLabel>
                            {<Box>
                                <Typography sx={{color:"red"}}>{whiteSpaceMessage}</Typography>
                                <Typography sx={{color:"red"}}>{upperCaseMessage}</Typography>
                                <Typography sx={{color:"red"}}>{lowerCaseMessage}</Typography>
                                <Typography sx={{color:"red"}}>{digitMessage}</Typography>
                                <Typography sx={{color:"red"}}>{symbolMessage}</Typography>
                                <Typography sx={{color:"red"}}>{lengthMessage}</Typography>
                            </Box>}
                            <TextField inputRef={textFieldForPasswordRef}  id="password" value = {password} fullWidth  variant="outlined"
                            onChange={(e) => {setPassword(e.target.value); isValidPassword(e.target.value)}} 
                            inputProps={{
                                onKeyDown: event => {
                                    const {key} = event;
                                    if(key === "Enter" ){
                                        event.preventDefault()
                                        textFieldForConfirmPasswordRef.current.focus()
                                    }
                                }
                            }}
                            />
                        </Grid>
                        <Grid item>
                            <InputLabel>
                                Confirm Password*
                            </InputLabel>
                            {<Typography sx={{color:"red"}}>{errorMessages.confirmPasswordMessage}</Typography>}
                            <TextField inputRef={textFieldForConfirmPasswordRef}  id="password-confirm" value = {confirmPassword} fullWidth  variant="outlined" 
                            onChange={(e) => {setConfirmPassword(e.target.value); samePassword(e.target.value)}} />
                        </Grid>
                        <Grid item display="flex" justifyContent="center" alignItems="center" xs={9}>
                            <Button type="submit" variant="contained"fullWidth sx={{width:480}}  >Sign Up</Button>
                        </Grid>
                    </Grid>
                    <Grid container item direction="column" alignContent="flex-start" spacing={1} justifyContent="center" >
                        <Grid item>
                            <Box paddingLeft={"80px"} gap={"30px"}>
                                {error !==undefined ?(<Alert severity="error">{getAuthenticationErrorMessage(error?.code)}</Alert>) :(null)}
                                {user !== undefined ? (<Alert severity="success">Logged in Successfully</Alert>) :(null) }
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default SignUpPage
