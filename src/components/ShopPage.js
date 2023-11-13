
import { Grid, Box, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import { getProducts } from "../firebase/utilities";
import ShopListItem from "./ShopListItem";

const ShopPage = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () =>{
            setProducts(await getProducts())
        }
        fetchProducts()
    },)

    return(
        <Grid container display={"flex"} direction={"row"} spacing={12} paddingRight={"135px"} paddingLeft={"84px"} >
            <Grid item xs = {4} >
                <Box display={"flex"} flexDirection={"column"} gap={"16px"} padding={"224px 0px"} >
                    <Typography variant="item_header">Product Categories</Typography>
                    <Box display={"flex"} flexDirection={"column"} gap={"12px"}>
                        <Typography variant="body1" sx={{color:"rgba(0,0,0,0.7)", lineHeight:"140%", paddingLeft:"20px"}}>Headphones</Typography>
                        <Typography variant="body1" sx={{color:"rgba(0,0,0,0.7)", lineHeight:"140%", paddingLeft:"20px"}}>Headsets</Typography>
                        <Typography variant="body1" sx={{color:"rgba(0,0,0,0.7)", lineHeight:"140%", paddingLeft:"20px"}}>Laptops</Typography>
                        <Typography variant="body1" sx={{color:"rgba(0,0,0,0.7)", lineHeight:"140%", paddingLeft:"20px"}}>Watches</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs = {8} >
                <Grid container item rowGap={7} paddingTop={"112px"} paddingBottom={"112px"}>
                    <Typography variant="product_header">Shop</Typography>
                    <Grid container item rowGap={7} columnGap={4}>
                        {products.length !==0 ? (<ProductList products={products}/>) :(<Typography>Loading</Typography>)}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

const ProductList = ({products}) => (products.map((product) => <ShopListItem product = {product} />))

export default ShopPage