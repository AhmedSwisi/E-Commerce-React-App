import React, {useState, useEffect} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AppBar, Typography, Box, Toolbar, Link, Popover, IconButton } from "@mui/material";
import {auth, logOut} from "../firebase/firebase";
import { HeadphonesRounded, ShoppingBagOutlined, PersonOutlineOutlined, VerifiedUserOutlined} from "@mui/icons-material";
import SearchBar from "./common/SearchBar";
import "@fontsource/inter"


//const pages = ['Home', "Shop", "Contact Us"]

const NavBar  = () => {

    const [user, loading] = useAuthState(auth)
    const [authState, setAuthState] = useState("unauthenticated")
    const [anchorEl, setAnchorEl] = useState(null);

    const handleIconClick = (event) =>{
        setAnchorEl(event.currentTarget)
    }

    const handleIconClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)

    useEffect(() => {
        if(loading) return;
        if (!user) {setAuthState("unauthenticated")};
        if (user) {setAuthState("authenticated")};
    }, [user, loading])

    return(
        <Box 
        paddingRight={"80px"} 
        paddingLeft={"80px"}
        display={"flex"}
        height={"100px"}
        width={'auto'}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        flexShrink={0}> 
            <Box display={"flex"} gap={"32px"} justifyContent={"center"} alignItems={"center"}  alignSelf={"stretch"}   >
                <AppBar position="fixed" elevation={0}>
                    <Toolbar  disableGutters = {true} >
                        <Box display={"flex"} sx={{width:1280}} gap={"32px"} flex={"1 0 0"} justifyContent={"center"} alignItems={"center"} > 
                            <Box sx={{width:509}} display={"flex"}  alignItems={"flex-start"}   >
                                <HeadphonesRounded/>
                                <Typography variant="body2">Logo</Typography>
                            </Box>
                            <Box display={"flex"} gap={"32px"}  alignItems={"flex-start"} sx={{width:224}}>
                                <Link variant="appbar_link" href = "/">Home</Link>
                                <Link variant="appbar_link" href = "/shop">Shop</Link>
                                <Link variant="appbar_link" href = "/contactus">Contact Us</Link>
                            </Box>
                            <Box display={"flex"}  gap = {"24px"} alignItems={"center"} justifyContent={"flex-end"} sx={{width:483}} >
                                <SearchBar />
                                <ShoppingBagOutlined />
                                {authState === "unauthenticated" 
                                ? (<>
                                    <IconButton onClick={handleIconClick}>
                                        <PersonOutlineOutlined />
                                    </IconButton>
                                    <Popover
                                    elevation={1}
                                     open = {open}
                                     anchorEl={anchorEl}
                                     onClose={handleIconClose}
                                     anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal:"left"
                                     }}
                                    >
                                        <Box display={"flex"} flexDirection={"column"} sx={{ width:"224px", backgroundColor:"#FFF", borderRadius:"4px", border:"1px solid rgba(0, 0, 0, 0.50)"}} padding={"16px"} alignItems={"flex-start"} gap={"32px"}>
                                            <Link variant="appbar_link" href = "/login">Sign In</Link>
                                            <Link variant="appbar_link" href = "/signup" >Create An Account</Link>
                                        </Box>
                                    </Popover>
                                    </>)
                                 
                                : (
                                <>
                                <IconButton onClick={handleIconClick}>
                                    <VerifiedUserOutlined />
                                </IconButton>
                                <Popover
                                elevation={1}
                                 open = {open}
                                 anchorEl={anchorEl}
                                 onClose={handleIconClose}
                                 anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal:"left"
                                 }}
                                >
                                    <Box display={"flex"} flexDirection={"column"} sx={{width:"224px", borderRadius:"4px", border:"1px solid rgba(0, 0, 0, 0.50)"}} padding={"16px"} alignItems={"flex-start"} gap={"32px"}>
                                        <Link variant="appbar_link" href = "/cart">Manage Orders</Link>
                                        <Link component={"button"} onClick = {logOut} variant="appbar_link" >Log Out</Link>
                                    </Box>
                                </Popover>
                                </>
                                )}
                            </Box>
                            
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </Box>
        
    )
}

export default NavBar;