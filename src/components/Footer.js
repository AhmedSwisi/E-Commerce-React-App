import React from "react";
import { Box, Typography, Link, Divider } from "@mui/material";
import { HeadphonesRounded } from "@mui/icons-material";

const Footer = () => {
    return(
            <Box display={"flex"}  flexDirection={"column"} gap={"64px"} alignItems={"center"} padding={"80px 0px"} sx={{backgroundColor:"white"}} alignSelf={"center"}>
                 <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"32px"}>
                    <Box display={"flex"} flexDirection={"row"} gap={"5px"}>
                        <HeadphonesRounded />
                        <Typography variant="body2">Logo</Typography>
                    </Box>
                    <Box display={"flex"} gap={"32px"} flexDirection={"row"} alignItems={"flex-start"}>
                        <Link variant="footer_link" href = "/">Home</Link>
                        <Link variant="footer_link" href = "/shop">Shop</Link>
                        <Link variant="footer_link" href = "/contactus">Contact Us</Link>
                    </Box>
                </Box>
                <Box display={"flex"} width={"1280"} flexDirection={"column"} alignItems={"center"} gap={"32px"}>
                    <Divider sx={{height:"1px", color:"black", backgroundColor:"black", alignSelf:"stretch"} } />
                    <Box display={"flex"} flexDirection={"row"} alignItems={"flex-start"} justifyContent={"space-between"} alignSelf={"stretch"}  width={"1280px"} >
                        <Typography variant="credits">All rights reserved.</Typography>
                        <Box display={"flex"} flexDirection={"row"} alignItems={"flex-start"} gap={"24px"}>
                            <Link sx={{fontWeight:"400"}} variant="footer_link" href = "/policy">Privacy Policy</Link>
                            <Link sx={{fontWeight:"400"}} variant="footer_link" href = "/service">Terms of Service</Link>
                            <Link sx={{fontWeight:"400"}} variant="footer_link" href = "/cookie">Cookie Settings</Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
    )
}

export default Footer