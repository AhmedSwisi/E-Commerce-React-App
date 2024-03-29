import React, {useState, useEffect} from "react";
import { getImage } from "../firebase/utilities";
import { Box, Card, Typography, Grid, Link } from "@mui/material";

const ShopListItem = ({product}) => {

    const [imageUrl, setImageUrl] = useState("")
    
    useEffect(() =>{
        const fetchImage = async () => {
            if(imageUrl === ""){
                setImageUrl(await getImage(product.picture))
                console.log(imageUrl)
            }
        }
        fetchImage()
    },)

    return(
        <Grid item>
            <Link href = {`/product/${[product.id]}`}>
            <Card elevation={0}>
                <Box display={"flex"} justifyContent={"flex-start"} flexDirection={"column"} alignItems={"flex-start"} gap={"24px"} flex={"1 0 0"} sx={{height:"457px"}}>
                    <Box display={"flex"} sx={{height:"300px", width:"250px"} } flexShrink={0} >
                        <img style={{width:"100%", height:"100%", objectFit: "cover"}} src={imageUrl} className="picture" alt="loading"></img>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} gap={"16px"} justifyContent={"flex-start"}>
                        <Box display={"flex"} padding = "8px" sx={{backgroundColor:"#F4F4F4"}} justifyContent={"center"}>
                            {product != null 
                            ? (<Typography variant="footer_link">{product.category}</Typography>)
                            :(<Typography>Loading</Typography>)}
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
                            {product != null 
                            ? (<Typography variant="item_header">{product.productName}</Typography>) 
                            : (<Typography>Loading</Typography>)}
                            {product != null 
                            ? (<Typography variant="description_header">${product.price}</Typography>) 
                            : (<Typography>Loading</Typography>)}
                        </Box>
                    </Box>
                </Box>
            </Card>
            </Link>
        </Grid>
    )
}

export default ShopListItem