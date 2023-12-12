import React, {useEffect, useState} from "react";
import Cart from "./Cart";
import { getCart, getDiscountInfo} from "../firebase/utilities";
import { auth } from "../firebase/firebase";
import { Box, Button, Divider, Grid, TextField, Typography} from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";

const CartPage = () => {

    const [user, loading, error] = useAuthState(auth)
    const [cart, setCart] = useState()
    const [subtotal, setSubtotal] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [discountCode, setDiscountCode] = useState('')
    const [discountData, setDiscountData] = useState()

    useEffect(() => {
        console.log(user, "this is the user")
        const fetchCart = async () => {
            if (user !== null){
                const cartData = await getCart(user.uid)
                setCart(cartData)
            }
            
        }
        const fetchCodeInfo = async () => {
                setDiscountData(await getDiscountInfo(discountCode))
            
            
            }
        fetchCodeInfo()
        fetchCart()
    }, [discountCode, discountData, user])

    const handleDiscountCodeClick = () => {
        
        if (discountData.discountType === "Set Value"){
            setDiscount(discountData.discountedPrice)
        }
        if (discountData.discountType === "Percentage"){
            setDiscount(discountData.discountedPrice)
        }
    }

    const handleCouponChange = (event) => {
        setDiscountCode(event.target.value)
    }

    return(
        <Grid container display={"flex"} direction={"column"} width={"auto"} paddingLeft={"50px"} paddingRight={"50px"}  paddingTop={"112px"} paddingBottom={"112px"} gap={"54px"}>
            <Grid item>
                <Cart cart={cart} setSubtotal = {setSubtotal} />
            </Grid>
            <Grid item container display={"flex"} alignItems={"flex-end"} justifyContent={"flex-end"} gap={"24px"}>
                <Grid item>
                    <TextField value={discountCode} onChange={handleCouponChange} type="input" placeholder="Coupon Code" fullWidth  variant="outlined" size="small"/>
                </Grid>
                <Grid item>
                    <Button onClick={handleDiscountCodeClick} variant="contained" color="secondary">Apply Coupon</Button>
                </Grid>
            </Grid>

                <Grid item container display={"flex"} direction={"row"} justifyContent={"space-between"}  >
                    <Grid item container display={"flex"} direction={"column"} alignItems={"flex-start"} width={"auto"} flexShrink={0} gap={"30px"}>
                        <Grid item>
                            <Box display={"flex"} flexDirection={"column"}>
                                <Typography variant="h5">Billing Details</Typography>
                                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} sx={{height:"100px"}} >
                                    <Typography variant="item_header">Current Address</Typography>
                                    <Button variant="contained" color="primary">ADD NEW</Button>
                                </Box>
                                <Box display={"flex"} flexDirection={"column"} sx={{width:"530px", backgroundColor:"#ECECEC", borderRadius:"16px"}} padding={"32px"} alignItems={"flex-start"} gap={"32px"} alignSelf={"stretch"}>
                                    <Typography>Name: Ahmed Swisi</Typography>
                                    <Typography>Address: 3891 Ranchview Dr. Richardson, California 62639</Typography>
                                    <Typography>Phone: (307) 555-0133</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    {cart !== undefined
                    ?(<Grid item container display={"flex"} direction={"column"} width={"auto"}  alignItems={"flex-start"}  gap={"30px"}>
                    <Grid item>
                        <Typography variant="h5">Cart Total</Typography>
                    </Grid>
                    <Grid item>
                        <Box display={"flex"} flexDirection={"column"} gap={"14px"}>
                            <Box flexShrink={0} display={"flex"} flexDirection={"row"}  sx={{width:"500px", justifyContent:"space-between"}}>
                                <Typography>Subtotal</Typography>
                                <Typography>${subtotal}</Typography>
                            </Box>
                            <Divider />
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box display={"flex"} flexDirection={"column"} gap={"14px"}>
                            <Box flexShrink={0} display={"flex"} flexDirection={"row"}  sx={{width:"500px", justifyContent:"space-between"}}>
                                <Typography>Shipping fee</Typography>
                                <Typography>Free</Typography>
                            </Box>
                            <Divider />
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box display={"flex"} flexDirection={"column"} gap={"14px"}>
                            <Box flexShrink={0} display={"flex"} flexDirection={"row"}  sx={{width:"500px", justifyContent:"space-between"}}>
                                <Typography>Discount</Typography>
                                {discountData?.discountType === "Set Value" && 
                                (<Typography>-${discount}</Typography>)}
                                {discountData?.discountType === "Percentage" && 
                                (<Typography>-{discount}%</Typography>)}
                            </Box>
                            <Divider sx={{color:"black", backgroundColor:"black"}}/>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box flexShrink={0} display={"flex"} flexDirection={"row"}  sx={{width:"500px", justifyContent:"space-between"}}>
                            <Typography>Total</Typography>
                            <Typography>${subtotal - discount}</Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Button variant="contained">PROCEED TO CHECKOUT</Button>
                    </Grid>
                </Grid>) 
                    :(null)
                    }
                    
                </Grid>
                
        </Grid>
    )
}

export default CartPage