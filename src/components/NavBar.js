import React from "react";
import { AppBar, Typography, Box, Toolbar, Link  } from "@mui/material";
import { HeadphonesRounded, ShoppingBagOutlined, PersonOutlineOutlined} from "@mui/icons-material";
import SearchBar from "./common/SearchBar";
import "@fontsource/inter"


//const pages = ['Home', "Shop", "Contact Us"]

const NavBar  = () => {
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
                                <PersonOutlineOutlined />
                            </Box>
                            
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </Box>
        
    )
}

export default NavBar;