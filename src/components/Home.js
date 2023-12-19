import { Box, Grid, Typography, Button, List } from "@mui/material";
import React, {useEffect, useState, } from "react";
import { getImage} from "../firebase/utilities";
import { useNavigate } from "react-router-dom";
import ProductList from "./ProductList";

const Home = () =>{
    const [headerImage, setHeaderImageUrl] = useState()
    const [headphonesImage, setHeadphonesImageUrl] = useState()
    const [watchImage, setWatchImageUrl] = useState()
    const [laptopImage, setLaptopImageUrl] = useState()
    const [saleImage, setSaleImageUrl] = useState()
    const [currentCategory] = useState("default")
    const [priceRangeFilter] = useState([0, 1500])
    const navigate = useNavigate()

    console.log("calling Home page")

    const handleShopButtonClick = () => {
        navigate("/shop")
    }

    useEffect(() =>{
        const fetchData = async () => {
            setHeaderImageUrl(await getImage('gs://e-commerce-project-60813.appspot.com/Header Tab.png'))
            setHeadphonesImageUrl(await getImage('gs://e-commerce-project-60813.appspot.com/Headphones tab.png'))
            setWatchImageUrl(await getImage('gs://e-commerce-project-60813.appspot.com/Watches Tab.png'))
            setLaptopImageUrl(await getImage('gs://e-commerce-project-60813.appspot.com/Laptops tab.png'))
            setSaleImageUrl(await getImage('gs://e-commerce-project-60813.appspot.com/Sales Tab.png'))
        }
        fetchData()
    },[])

    

    return(
        <Grid container display={"flex"} direction={"column"}  alignItems={"center"} gap={"96px"}   justifyContent={"center"}>
            <Grid item container justifyContent={"center"}>
                <Grid item xs = {11} display={"flex"} flexShrink={0} alignItems={"center"} padding={"0px 64px"} 
                sx={{height:"900px", borderRadius:"16px",
                background:"linear-gradient(116deg, rgba(0,0,0,0.5) 0.4%,rgba(0, 0, 0, 0.10) 95.85%), lightgray 50% / cover no-repeat",
                backgroundImage:`url(${headerImage})`,}}>
                    
                    <Box display={"flex"} flexDirection={"column"} gap={"24px"} flexShrink={0}>
                        <Box display={"flex"} flexDirection={"column"}>
                            <Typography variant="home_header">
                                Wireless 
                            </Typography>
                            <Typography variant="home_header" sx={{color:"white"}}>
                                Headphones 
                            </Typography>
                        </Box>
                        <Box display={"flex"} alignContent={"center"}>
                            <Button onClick={handleShopButtonClick} variant="contained">Visit Our Shop</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid item container display={"flex"}  flexDirection={"column"} gap = {"32px"}justifyContent={"center"} alignItems={"center"} flexShrink={0} xs = {10}>
                <Grid item>
                    <Typography variant="product_header" sx={{lineHeight:"150%"}}>Our Categories</Typography>
                </Grid>
                    <Grid item container sx={{height:"400px"}} display={"flex"} maxHeight={"400px"}  justifyContent={"center"} alignItems={"flex-start"} gap={"32px"}>
                        <Grid item xs = {2} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={"24px"} flexShrink={0}
                        sx={{
                                backgroundImage:`url(${headphonesImage}), linear-gradient(108deg, #000 0%, rgba(0, 0, 0, 0.73) 101.31%)`,
                                backgroundRepeat:"no-repeat",
                                backgroundSize:"contain",
                                height:"100%",
                                backgroundPosition:"bottom right",
                                borderRadius:"16px",
                             }}
                        >
                            <Box display={"flex"} flexDirection={"column"} paddingLeft={"24px"} gap={"12px"}> 
                                <Typography color={"white"} variant="item_header">The</Typography>
                                <Typography color={"white"} variant="item_header">Latest</Typography>
                                <Typography variant="card_header" >Headphones</Typography>
                            </Box>
                            <Box paddingLeft={"24px"} >
                                <Button onClick={handleShopButtonClick}  color="secondary" variant="contained">Browse</Button>
                            </Box>
                        </Grid>
                        <Grid item display={"flex"} xs = {2} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={"24px"} flexShrink={0}
                        sx={{
                                backgroundImage:`url(${watchImage}), linear-gradient(108deg, #FEC62E 0%, rgba(254, 198, 46, 0.73) 101.31%)`,
                                backgroundRepeat:"no-repeat",
                                backgroundSize:"contain",
                                height:"100%",
                                backgroundPosition:"center right",
                                borderRadius:"16px",
                             }}
                        >
                            <Box display={"flex"} flexDirection={"column"} paddingLeft={"24px"} gap={"12px"}> 
                                <Typography color={"white"} variant="item_header">New</Typography>
                                <Typography color={"white"} variant="item_header">Smart</Typography>
                                <Typography variant="card_header" >Watches</Typography>
                            </Box>
                            <Box paddingLeft={"24px"} >
                                <Button onClick={handleShopButtonClick} color="secondary" variant="contained">Browse</Button>
                            </Box>
                        </Grid>
                        <Grid item display={"flex"} xs = {7} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={"24px"} flexShrink={0}
                        sx={{
                                backgroundImage:`url(${laptopImage}), linear-gradient(108deg, #F42C37 0%, rgba(244, 44, 55, 0.73) 101.31%)`,
                                backgroundRepeat:"no-repeat",
                                backgroundSize:"contain",
                                height:"100%",
                                backgroundPosition:"center right",
                                borderRadius:"16px",
                             }}
                        >
                            <Box display={"flex"} flexDirection={"column"} paddingLeft={"24px"} gap={"12px"}> 
                                <Typography color={"white"} variant="item_header">Trending</Typography>
                                <Typography color={"white"} variant="item_header">Devices</Typography>
                                <Typography variant="card_header" >Laptops</Typography>
                            </Box>
                            <Box paddingLeft={"24px"} >
                                <Button onClick={handleShopButtonClick} color="secondary" variant="contained">Browse</Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item container sx={{height:"400px"}} display={"flex"} maxHeight={"400px"}  justifyContent={"center"} alignItems={"flex-start"} gap={"32px"}>
                        <Grid item xs = {2} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={"24px"} flexShrink={0}
                        sx={{
                                backgroundImage:`url(${headphonesImage}), linear-gradient(108deg, #000 0%, rgba(0, 0, 0, 0.73) 101.31%)`,
                                backgroundRepeat:"no-repeat",
                                backgroundSize:"contain",
                                height:"100%",
                                backgroundPosition:"bottom right",
                                borderRadius:"16px",
                             }}
                        >
                            <Box display={"flex"} flexDirection={"column"} paddingLeft={"24px"} gap={"12px"}> 
                                <Typography color={"white"} variant="item_header">The</Typography>
                                <Typography color={"white"} variant="item_header">Latest</Typography>
                                <Typography variant="card_header" >Headphones</Typography>
                            </Box>
                            <Box paddingLeft={"24px"} >
                                <Button onClick={handleShopButtonClick} color="secondary" variant="contained">Browse</Button>
                            </Box>
                        </Grid>
                        <Grid item display={"flex"} xs = {7} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={"24px"} flexShrink={0}
                        sx={{
                                backgroundImage:`url(${laptopImage}), linear-gradient(108deg, #F42C37 0%, rgba(244, 44, 55, 0.73) 101.31%)`,
                                backgroundRepeat:"no-repeat",
                                backgroundSize:"contain",
                                height:"100%",
                                backgroundPosition:"center right",
                                borderRadius:"16px",
                             }}
                        >
                            <Box display={"flex"} flexDirection={"column"} paddingLeft={"24px"} gap={"12px"}> 
                                <Typography color={"white"} variant="item_header">Trending</Typography>
                                <Typography color={"white"} variant="item_header">Devices</Typography>
                                <Typography variant="card_header" >Laptops</Typography>
                            </Box>
                            <Box paddingLeft={"24px"} >
                                <Button onClick={handleShopButtonClick} color="secondary" variant="contained">Browse</Button>
                            </Box>
                        </Grid>
                        <Grid item display={"flex"} xs = {2} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} gap={"24px"} flexShrink={0}
                        sx={{
                                backgroundImage:`url(${watchImage}), linear-gradient(108deg, #FEC62E 0%, rgba(254, 198, 46, 0.73) 101.31%)`,
                                backgroundRepeat:"no-repeat",
                                backgroundSize:"contain",
                                height:"100%",
                                backgroundPosition:"center right",
                                borderRadius:"16px",
                             }}
                        >
                            <Box display={"flex"} flexDirection={"column"} paddingLeft={"24px"} gap={"12px"}> 
                                <Typography color={"white"} variant="item_header">New</Typography>
                                <Typography color={"white"} variant="item_header">Smart</Typography>
                                <Typography variant="card_header" >Watches</Typography>
                            </Box>
                            <Box paddingLeft={"24px"} >
                                <Button onClick={handleShopButtonClick} color="secondary" variant="contained">Browse</Button>
                            </Box>
                        </Grid>
                    </Grid>
            </Grid>
                <Grid item container display={"flex"}  flexDirection={"column"} gap = {"32px"} justifyContent={"center"} alignItems={"center"} flexShrink={0}>
                    <Grid item>
                    <Typography variant="product_header">Best Seller Products</Typography>
                    </Grid>
                    <Grid item container display={"flex"} gap={"30px"} xs = {8} justifyContent={"center"}>
                        <List
                            sx={{
                                width: '100%',
                                position: 'relative',
                                overflow: 'auto',
                                maxHeight: 1000,
                            }}>
                            <Grid container item rowGap={7} columnGap={15}>
                                <ProductList categoryFilter = {{currentCategory}} priceRangeFilter = {{priceRangeFilter}}/>
                            </Grid>
                        </List>
                    </Grid>

                </Grid>
                <Grid  item container paddingBottom={"500px"} direction={"row"} sx={{height:"400px"}} display={"flex"} maxHeight={"400px"}  justifyContent={"center"} alignItems={"flex-start"} gap={"32px"}>
                    <Grid sx={{
                                    backgroundImage:`url(${saleImage})`,
                                    backgroundColor:"#36B27E",
                                    backgroundRepeat:"no-repeat",
                                    backgroundSize:"contain",
                                    backgroundPosition:"center left",
                                    height:"500px",
                                    width:"1280px",
                                    borderRadius:"16px",
                                }} 
                            item display={"flex"} xs = {10} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} gap={"24px"} flexShrink={0}>
                                <Box display={"flex"} justifyContent={"center"} paddingTop={"100px"} sx={{height:"204px", width:"608px", }}>
                        <Typography sx={{
                            color:"white",
                            fontFamily:"Roboto",
                            fontSize:"188px",
                            fontStyle:"normal",
                            fontWeight:"700",
                            lineHeight:"120%"
                        }}>SALE!</Typography>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"} flex={"1 0 0"} gap={"24px"}>
                        <Box sx={{width:"325px"}}>
                        <Typography variant="product_header" color={"white"}>Product on sale now!</Typography>
                        </Box>
                        <Typography variant="body3" color={"white"}>Check out our shop for a lot of products on sale now</Typography>
                        <Box>
                            <Button onClick={handleShopButtonClick} color="secondary" variant="contained">Browse</Button>
                        </Box>
                    </Box>
                    </Grid>
                </Grid>
        </Grid>
    )
}

export default Home