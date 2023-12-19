import React, {useEffect, useState, useRef} from "react";
import { db } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getImage } from "../firebase/utilities";
import {  getDoc, doc} from "firebase/firestore";
import { Grid, Typography, Box, Rating, Button, ToggleButtonGroup, ToggleButton, Divider, TextField} from "@mui/material";
import { useParams } from "react-router-dom";
import ReviewList from "./ReviewList";
import { auth } from "../firebase/firebase";
import { addReview, setProductAverageRating} from "../firebase/utilities";

const ProductPage = () => {
    
    const [user] = useAuthState(auth)
    const [review, setReview] = useState("")
    const productID= useParams()
    const [reviewLength, setReviewLength] = useState()
    const [product, setProduct] = useState({})
    const [image, setImageUrl] = useState('')
    const [rating, setRating] = useState(0)
    const [productRating, setProductRating] = useState(0)
    const [selected, setSelected] = useState("description")
    const reviewFieldRef = useRef(null)

    console.log(productRating)


    const onSubmitReviewButton = () => {
        const userID = user.uid
        addReview(rating, review, userID, productID.id)
        setRating(0)
        setReview("")
        setProductAverageRating(productID.id)
        document.getElementById("reviewfield").value = ""

    }
    
    const handleToggle = (e, selectedToggle) => {
        if(selectedToggle !== null){
            setSelected(selectedToggle)
            console.log(selected)
        }
    }
    useEffect(() => {
        const productRef = doc(db, "products", productID.id)
        const getProduct = async () =>{ 
            const docSnap = await getDoc(productRef)
            const doc = docSnap.data()
            setProduct({...doc})
            setImageUrl(await getImage(doc.picture))
            console.log(doc.rating)
            setProductRating(await doc.rating)
        }
        getProduct()
    },[productID])

    return(
        <Grid container display={"flex"} direction={"column"} flexDirection={"column"} >
            <Grid item container display={"flex"} justifyContent={"center"} alignItems={"center"} padding={"112px 80px"} >
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
                            <Rating value={productRating} name="read-only" readOnly />
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
            <Grid item container display={"flex"} direction={"column"} justifyContent={"center"} alignItems={"center"} padding={"112px 80px"} gap={"48px"}>
                <Grid item>
                    <ToggleButtonGroup
                    value={selected}
                    onChange={handleToggle}
                    exclusive>
                        <ToggleButton sx={{borderRadius:"8px 0px 0px 8px", padding: "12px 24px"}} value={"description"}>Description</ToggleButton>
                        <ToggleButton sx={{borderRadius:"0px 8px 8px 0px", padding: "12px 24px"}} value={"reviews"}>{reviewLength === 0 || reviewLength === undefined
                        ?(<Typography>Reviews</Typography>) :(<Typography>Reviews ({reviewLength})</Typography>)}</ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                <Grid item container display={"flex"} alignContent={"flex-start"} gap={"32px"} padding={"32px"}>
                    <Grid item>
                        {selected === "description" 
                        ?(<Typography variant="description_header">Description</Typography>) 
                        :(<Typography variant="description_header">Reviews</Typography>)}
                    </Grid>
                        <Divider sx={{width:"100%", height:"1px", color:"black", backgroundColor:"black"} }/>
                    <Grid container item justifyContent={"space-between"} gap={"30px"} >
                        <Grid item md = {6}>
                            {selected === "description" && (<Typography variant="body1">{product.description}</Typography>) }
                            {selected === "reviews" && (
                                <ReviewList productID = {productID.id} setReviewLength = {setReviewLength} />
                            )}
                        </Grid>
                        <Grid item md = {5}>
                            <Box display={"flex"} flexDirection={"column"} gap={"16px"}>
                                <Box display={"flex"} flexDirection={"column"} gap={"16px"}>
                                    <Typography  variant="h3">Add a Review</Typography>
                                    <Box display={"flex"}  flexDirection={"row"} gap={"10px"}>
                                        <Typography variant="footer_link">Your Rating: </Typography>
                                        <Rating value={rating} onChange={e => setRating(e.target.value)} />
                                    </Box>
                                </Box>
                                <Box display={"flex"} flexDirection={"column"} gap={"16px"}>
                                    <Typography>Your Review: </Typography>
                                    <TextField inputRef={reviewFieldRef} id="reviewfield" onChange={e => setReview(e.target.value)} multiline 
                                        inputProps={{
                                            maxLength: 500,
                                        }}></TextField>
                                    <Box>
                                        <Button variant="contained"  onClick={onSubmitReviewButton}>Submit</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProductPage
