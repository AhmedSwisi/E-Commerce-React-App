import React, { useEffect } from "react"
import { Box, Typography, Divider, Rating, Grid} from "@mui/material"
const ReviewListItem = ({review}) => {
    useEffect(() => {
        const fetchUser = async () => {

        }
    })

    
    return(
    <Grid item display={"flex"} alignSelf={"stretch"} padding={"32px"} direction={"column"} alignItems={"flex-start"} gap={"32px"}
    sx={{backgroundColor:"#ECECEC", borderRadius:"16px", width:"100%"}}>
        <Box display={"flex"} padding={"32px"} flexDirection={"column"} alignItems={"flex-start"} gap={"32px"} flex={"1 0 0"} alignSelf={"stretch"}>
            <Box display={"flex"} sx={{height:"34px"}} justifyContent={"space-between"} alignItems={"center"} alignSelf={"stretch"} >
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"16px"}>
                    <Box sx={{width:"40px", height:"40px", borderRadius:"100px", backgroundColor:"black"}}>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"} gap={"8px"}>
                        <Typography variant="description_header">{"User Name"}</Typography>
                        <Typography variant="appbar_link">{}</Typography>
                    </Box>
                </Box>
                <Rating value={review.rating} name="read-only" readOnly />
            </Box>
            <Divider sx={{width:"100%", height:"1px", color:"black", backgroundColor:"black"} }/>
                <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"} gap={"16px"} alignSelf={"stretch"}>
                    <Typography variant="body1">{review.review}</Typography>
            </Box>
        </Box>
    </Grid>
    )
}

export default ReviewListItem
                    
                    
                    
                    
                    