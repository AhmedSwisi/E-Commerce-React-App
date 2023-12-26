import React, {useEffect, useState} from "react";
import Cart from "./Cart";
import { getAddress, getCart, getDiscountInfo, addAddress} from "../firebase/utilities";
import { auth } from "../firebase/firebase";
import { Box, Button, Divider, Grid, TextField, Typography, InputLabel} from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";

const CartPage = () => {

    const [user, loading, error] = useAuthState(auth)
    const [changingAddress, setChangingAddress] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [cart, setCart] = useState(undefined)
    const [subtotal, setSubtotal] = useState(0)
    const [streetAddressField, setStreetAddressField] = useState('')
    const [townAddressField, setTownAddressField] = useState('')
    const [discount, setDiscount] = useState(0)
    const [discountCode, setDiscountCode] = useState('')
    const [discountData, setDiscountData] = useState()
    const [address, setAddress] = useState(undefined)

    console.log(cart)
    useEffect(() => {
        console.log(user, "this is the user")
        const fetchCart = async () => {
            if (user !== null && cart === undefined){
                const cartData = await getCart(user.uid)
                console.log(cart, "Use effect")
                setCart(cartData)
            }
            
        }

        const fetchCodeInfo = async () => {
                setDiscountData(await getDiscountInfo(discountCode))
            
            
            }

        const fetchAddress = async () => {
            if(user){
            setAddress(await getAddress(user?.uid))
            }
        }
        fetchAddress()
        fetchCodeInfo()
        fetchCart()
    }, [cart, discountCode, discountData, user])

    

    

    const handleAddAddressClick = async () => {
        const address = streetAddressField + ", " + townAddressField
        await addAddress(user.uid, address, phoneNumber )
        setStreetAddressField('')
        setPhoneNumber('')
        setTownAddressField('')
        document.getElementById("phone-number").value =''
        document.getElementById("street").value = ''
        document.getElementById("town").value = ''
        setAddress(await getAddress(user.uid))

    }
    console.log(streetAddressField)

    const handleStreetAddressChange = (event) => {
        setStreetAddressField(event.target.value)
    }

    const handleTownAddressChange = (event) => {
        setTownAddressField(event.target.value)
    }

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value)
    }

    const handleCouponChange = (event) => {
        setDiscountCode(event.target.value)
    }

    const handleDiscountCodeClick = () => {
        
        if (discountData.discountType === "Set Value"){
            setDiscount(discountData.discountedPrice)
        }
        if (discountData.discountType === "Percentage"){
            setDiscount(discountData.discountedPrice)
        }
    }

    const handleChangeAddressClick = () => {
        setChangingAddress(true)
    }

    

    return(
        <Grid container display={"flex"} direction={"column"} width={"auto"} paddingLeft={"50px"} paddingRight={"50px"}  paddingTop={"112px"} paddingBottom={"112px"} gap={"54px"}>
            <Grid item>
                <Cart cart={cart} setSubtotal = {setSubtotal} setCart={setCart} />
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
                        <Box display={"flex"} flexDirection={"column"} gap={"16px"}>
                        <Typography variant="h5">Billing Details</Typography>
                            {(address !== undefined && changingAddress === false) &&
                            (
                            
                            <Box display={"flex"} flexDirection={"column"}>
                                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} sx={{height:"100px"}} >
                                    <Typography variant="item_header">Current Address</Typography>
                                    <Button onClick={handleChangeAddressClick} variant="contained" color="primary">CHANGE ADDRESS</Button>
                                </Box>
                                <Box display={"flex"} flexDirection={"column"} sx={{width:"530px", backgroundColor:"#ECECEC", borderRadius:"16px"}} padding={"32px"} alignItems={"flex-start"} gap={"32px"} alignSelf={"stretch"}>
                                    <Typography>{address?.addresses[0].name}</Typography>
                                    <Typography>{address?.addresses[0].address}</Typography>
                                    <Typography>{address?.addresses[0].number}</Typography>
                                </Box>
                            </Box>
                        ) }
                        {address === undefined && (
                            <Box display={"flex"} flexDirection={"column"} sx={{width: "530px"}} gap={"24px"}>
                                <Box>
                                <InputLabel>
                                    Street Address
                                </InputLabel>
                                <TextField id="street" onChange={handleStreetAddressChange} multiline type="input" fullWidth placeholder="House number and street name"  variant="outlined" size="medium"/>
                                </Box>
                                <Box>
                                <InputLabel>
                                    Town/City
                                </InputLabel>
                                <TextField id="town" onChange={handleTownAddressChange} multiline type="input" fullWidth  variant="outlined" size="medium"/>
                                </Box>
                                <Box>
                                <InputLabel>
                                    Phone Number
                                </InputLabel>
                                <TextField id="phone-number" onChange={handlePhoneNumberChange} multiline type="input" fullWidth  variant="outlined" size="medium"/>
                                </Box>
                                <Box>
                                <Button variant="contained" onClick={handleAddAddressClick}>ADD ADDRESS</Button>
                                </Box>
                            </Box>
                            )
                            }
                            {changingAddress === true}
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
                                {discount === 0 && (<Typography>-${discount}</Typography>)}
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