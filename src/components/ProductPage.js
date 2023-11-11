import React, {useEffect, useState} from "react";
import { productDb } from "../firebase/firebase";
import { getDownloadURL, getStorage, ref} from "firebase/storage";
import {  getDoc, doc} from "firebase/firestore";
import { Grid, Typography, Box, Rating, Button } from "@mui/material";



const ProductPage = () => {

    
    const [product, setProduct] = useState({})
    const [image, setImageUrl] = useState('')
    const [rating, setRating] = useState(null)

    const storage = getStorage();
    const productRef = doc(productDb, "products", "8ZUNJpbUavLUeLRv6FVD")

    
    const getImage = async (location) =>{
        const  imageUrl = await getDownloadURL(ref(storage, location))
        return imageUrl
    }   

    useEffect(() => {
        
        const getProduct = async () =>{ 
            const docSnap = await getDoc(productRef)
            const doc = docSnap.data()
            setProduct({...doc})
            setImageUrl(await getImage(doc.picture))
            console.log(doc.rating)
            setRating(doc.rating)
        }

        getProduct()
    }, [])

    return(
        <Grid container direction={"row"} alignContent={"center"} spacing={10} justifyContent={"center"} paddingTop={"112px"} paddingBottom={"112px"} paddingRight={"80px"} paddingLeft={"80px"}>
            <Grid item>
                <Box display={"flex"} flexDirection={"column"} width={"526px"} height={"640px"}>
                    <img src={image} alt="Loading" className="profile" />
                    <Box display={"flex"} flexDirection={"row"} gap={"24px"} paddingTop={"24px"}>
                        <Box width={"100px"} height={"100px"}>
                        <img style={{width:"100%", height:"100%"}} src={image} alt="Loading" className="profile" ob/>
                        </Box>
                        <Box width={"100px"} height={"100px"}>
                        <img style={{width:"100%", height:"100%"}} src={image} alt="Loading" className="profile" ob/>
                        </Box>
                        <Box width={"100px"} height={"100px"}>
                        <img style={{width:"100%", height:"100%"}} src={image} alt="Loading" className="profile" ob/>
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid item  >
                <Box display={"flex"} flexDirection={"column"} flex={"1 0 0"} justifyContent={"flex-start"} alignContent={"start"} gap={"24px"}>
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignContent={"stretch"} gap={"24px"}>
                        <Typography variant="product_header">{product.productName}</Typography>
                        <Typography variant="price_text">${product.price}</Typography>
                        <Rating value={rating} name="read-only" readOnly />
                        <Typography variant="body3" width={"674px"}>{product.description}</Typography>
                    </Box>
                    <Typography variant="body1" sx={{fontWeight:"700"}} padding={"12px"}>In Stock: {product.stock}</Typography>
                    <Typography variant="body1" sx = {{color:"rgba(0,0,0,0.5)"}} padding={"12px"} >Out of stock</Typography>
                    <Box display={"flex"} flexDirection={"row"} gap={"16px"} paddingTop={"16px"}>
                        <Button variant="contained" type="submit" fullWidth  >Add to cart</Button>
                        <Button variant="contained" type="submit" fullWidth color="secondary" >Buy Now</Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ProductPage
