
import { Grid, Box, Typography, Button, Link, List} from "@mui/material";
import React, {useState} from "react";
import ProductList from "./ProductList";
import RangeSlider from "./common/RangeSlider";



const ShopPage = () => {
    console.log("calling shop page")
    const [currentCategory, setCurrentCategory] = useState("default")
    const [currentRange, setCurrentRange] = useState([0,1500])
    const [priceRangeFilter, setPriceRangeFilter] = useState([0, 1500])
    const handleHeadphonesFilterClick = () => {
        setCurrentCategory("Headphones")        
        console.log(currentCategory)
    }

    const handlePriceFilterClick = () => {
        setPriceRangeFilter(currentRange)
    }

    const handleHeadsetsFilterClick = () => {
        setCurrentCategory("Headsets")
        console.log(currentCategory)
    }

    const handleLaptopsFilterClick = () => {
        setCurrentCategory("Laptops")
        console.log(currentCategory)
    }

    const handleWatchesFilterClick = () => {
        setCurrentCategory("Watches")
        console.log(currentCategory)
    }

    return(
        <Grid container display={"flex"} direction={"row"} spacing={12} paddingRight={"135px"} paddingLeft={"84px"} >
            <Grid item xs = {4} >
                <Box display={"flex"} flexDirection={"column"} gap={"56px"} padding={"224px 0px"} >
                    <Box display={"flex"} flexDirection={"column"} alignContent={"flex-start"} gap={"12px"}>
                    <Typography variant="item_header">Product Categories</Typography>
                        <Link component={"button"} onClick={handleHeadphonesFilterClick} variant="body1" sx={{color:"rgba(0,0,0,0.7)", lineHeight:"140%", paddingLeft:"20px", display:"flex"}}>Headphones</Link>
                        <Link component={"button"} onClick={handleHeadsetsFilterClick} variant="body1" sx={{color:"rgba(0,0,0,0.7)", lineHeight:"140%", paddingLeft:"20px", display:"flex"}}>Headsets</Link>
                        <Link component={"button"} onClick={handleLaptopsFilterClick} variant="body1" sx={{color:"rgba(0,0,0,0.7)", lineHeight:"140%", paddingLeft:"20px", display:"flex"}}>Laptops</Link>
                        <Link component={"button"} onClick={handleWatchesFilterClick} variant="body1" sx={{color:"rgba(0,0,0,0.7)", lineHeight:"140%", paddingLeft:"20px", display:"flex"}}>Watches</Link>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} gap={"16px"} >
                        <Typography variant="item_header">Filter by Price</Typography>
                        <RangeSlider setCurrentRange={setCurrentRange} currentRange={currentRange} />
                        <Box>
                            <Button onClick={handlePriceFilterClick} variant="contained">Filter</Button>
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs = {8} >
                <Grid container item rowGap={7} >
                    <Typography variant="product_header">Shop</Typography>
                    <List
                    sx={{
                        width: '100%',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 1000,
                    }}>
                    <Grid container item rowGap={7} columnGap={4} >
                        <ProductList categoryFilter = {{currentCategory}} priceRangeFilter = {{priceRangeFilter}}/>
                    </Grid>
                    </List>
                </Grid>
            </Grid>
        </Grid>
    )
}



export default ShopPage