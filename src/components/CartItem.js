import { TableCell, TableRow, Box, IconButton, ButtonGroup, Button} from "@mui/material";
import { Clear } from "@mui/icons-material";
import { useAuthState } from "react-firebase-hooks/auth";
import React, {useEffect, useState} from "react";
import { getCartProduct, getImage, setProductQuantity, deleteProductFromCart } from "../firebase/utilities";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { auth } from "../firebase/firebase";

const CartItem = ({product, setSubtotal, cart, setCart}) => {
    const [user] = useAuthState(auth)
    const [imageUrl, setImageUrl] = useState('')
    const[productData, setProductData] = useState()
    const[quantity, setQuantity] = useState(cart[`${product}`])
    const [itemTotalPrice, setItemTotalPrice] = useState()

    console.log(product)
    console.log(productData)
    const onIncrementButtonClick = () => {
        setProductQuantity(user.uid,product, quantity + 1)
        const temp = quantity + 1
        setQuantity(temp)
        setItemTotalPrice(productData.price * temp)
        setSubtotal((subTotal) => subTotal +productData.price)
    }

    const onDecrementButtonClick = () => {
        setProductQuantity(user.uid,product, quantity - 1)
        const temp = quantity - 1
        setQuantity(temp)
        setItemTotalPrice(productData.price * temp)
        setSubtotal((subTotal) => subTotal - productData.price)
    }

    const onClearButtonClick = () => {
        deleteProductFromCart(user.uid, product)
        delete cart[`${product}`]
        setCart(cart)
        product = undefined 
        setProductData(null)
        console.log(productData)
        console.log(product)
        setImageUrl(null)
        setQuantity(null)
        setSubtotal((subTotal) => subTotal - (productData.price * quantity))
    }

    useEffect(() =>{
        const fetchProduct = async () => {
            if (productData === undefined){
                setProductData(await getCartProduct(product))
                
            }

            if(imageUrl === "" && productData !==undefined){
                setImageUrl(await getImage(productData?.picture))
                setItemTotalPrice(productData.price * cart[`${product}`])
                setSubtotal(subTotal => subTotal + productData.price * quantity )
            }
        }
        
        
        fetchProduct()
    },[cart, imageUrl, product, productData, quantity, setSubtotal])
    

    


    return(
        
        <TableRow>
            {productData !== undefined && productData !==null
            ?(
                <>
                    <TableCell>
                        
                        <Box display={"flex"} flexDirection={"row"} gap={"56px"} alignItems={"center"} >
                        <IconButton onClick={onClearButtonClick} color="primary">
                            <Clear />
                        </IconButton>
                        
                            <Box display={"flex"} flexShrink={0}>
                            
                                <img style={{width:"48px", height:"48px"}} src={imageUrl} className="picture" alt="loading"></img>
                            
                            </Box>
                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                {productData?.productName}
                            </Box>
                        </Box>
                    </TableCell>
                    <TableCell>${productData?.price}</TableCell>
                    <TableCell>
                        <Box display={"flex"}  alignItems={"center"} gap={"16px"} >
                        {quantity}
                        <ButtonGroup orientation="vertical">
                            <IconButton variant="outlined" sx={{borderColor:"gray"}} color="primary" disableElevation = {true} onClick={onIncrementButtonClick}><KeyboardArrowUpOutlinedIcon /></IconButton>
                            <IconButton variant="outlined"  color="primary" onClick={onDecrementButtonClick} disableElevation = {true}><KeyboardArrowDownOutlinedIcon /></IconButton>
                        </ButtonGroup>
                        </Box>
                    </TableCell>
                    <TableCell>${itemTotalPrice}</TableCell>
                </>
            ) 
            :(null)} 
        </TableRow>
    )
}

export default CartItem