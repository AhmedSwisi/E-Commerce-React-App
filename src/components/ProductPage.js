import React, {useEffect, useState} from "react";
import { db } from "../firebase/firebase";
import { getImage } from "../firebase/utilities";
import {  getDoc, doc} from "firebase/firestore";
import { Grid, Typography, Box, Rating, Button, ToggleButtonGroup, ToggleButton, Divider} from "@mui/material";


const ProductPage = () => {

    const [reviews, setReviews] = useState(['n'])
    const [product, setProduct] = useState({})
    const [image, setImageUrl] = useState('')
    const [rating, setRating] = useState(null)
    const [selected, setSelected] = useState("description")
    const productRef = doc(db, "products", "8ZUNJpbUavLUeLRv6FVD")

    const handleToggle = (e, selectedToggle) => {
        if(selectedToggle !== null){
            setSelected(selectedToggle)
            console.log(selected)
        }
    }

    

    useEffect(() => {
        
        const getProduct = async () =>{ 
            const docSnap = await getDoc(productRef)
            const doc = docSnap.data()
            setProduct({...doc})
            //setImageUrl(await getImage(doc.picture))
            setRating(doc.rating)
        }

        getProduct()
    },)

    return(
        <Grid container direction={"column"} flexDirection={"column"} spacing={10}  paddingTop={"112px"} paddingBottom={"112px"} paddingRight={"80px"} paddingLeft={"80px"}>
            <Grid item >
                <Box display={"flex"} direction = {"row"} gap={"80px"}>
                    <Box display={"flex"} flexDirection={"column"}  width={"526px"} height={"640px"}>
                        <img src={image} alt="Loading" className="profile" />
                        <Box display={"flex"} flexDirection={"row"} gap={"24px"} paddingTop={"24px"}>
                                <Box width={"100px"} height={"100px"}>
                                <img style={{width:"100%", height:"100%"}} src={image} alt="Loading" className="profile" />
                                </Box>
                                <Box width={"100px"} height={"100px"}>
                                <img style={{width:"100%", height:"100%"}} src={image} alt="Loading" className="profile" />
                                </Box>
                                <Box width={"100px"} height={"100px"}>
                                <img style={{width:"100%", height:"100%"}} src={image} alt="Loading" className="profile" />
                                </Box>
                        </Box>
                    </Box>
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
               </Box>
            </Grid>
            <Grid item >
                <Box display={"flex"} flexDirection={"column"} spacing={10}  paddingTop={"112px"} paddingBottom={"112px"} paddingRight={"80px"} paddingLeft={"80px"} gap={"40px"}>
                    <Box display={"flex"} justifyContent={"center"}>
                        <ToggleButtonGroup
                        value={selected}
                        onChange={handleToggle}
                        exclusive
                        >
                            <ToggleButton sx={{borderRadius:"8px 0px 0px 8px", padding: "12px 24px"}} value={"description"}>Description</ToggleButton>
                            <ToggleButton sx={{borderRadius:"0px 8px 8px 0px", padding: "12px 24px"}} value={"reviews"}>Reviews (1)</ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                    <Box display={"flex"} flex={"1 0 0"} gap={"32px"} flexDirection={"column"} justifyContent={"flex-start"} alignContent={"flex-start"} alignItems={"flex-start"} padding={"32px"} alignSelf={"stretch"}>
                        {selected === "description" ?(<Typography variant="description_header">Description</Typography>) :(<Typography variant="description_header">Reviews</Typography>)}
                        
                        <Divider sx={{width:"1216px", height:"1px", color:"black", backgroundColor:"black"} }/>
                        <Box display={"flex"} height={"107px"} alignItems={"flex-start"} alignSelf={"stretch"}>
                            {selected === "description" && 
                                 (<Typography variant="body1">{product.description}</Typography>) }
                            {selected === "reviews" && reviews.length=== 0 
                            ? (<Typography variant="body1">No reviews yet</Typography>) 
                            :(<Box display={"flex"}  alignItems={"flex-start"} flex={"1 0 0"} gap={"32px"} sx={{backgroundColor:"#ECECEC", borderRadius:"16px"}}>
                                
                            </Box>)}
                        </Box>
                    </Box>
                      
                </Box>
            </Grid>
        </Grid>
    )
}

export default ProductPage
