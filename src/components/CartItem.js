import { TableCell, TableRow, Box } from "@mui/material";
import React, {useEffect, useState} from "react";
import { getProduct, getImage } from "../firebase/utilities";

const CartItem = ({product, setSubtotal}) => {
    
    const [imageUrl, setImageUrl] = useState('')
    const[productData, setProductData] = useState()

    useEffect(() =>{
        console.log("calling use Effect 1")
        const fetchProduct = async () => {
            console.log("calling fetch Products 1")
            if (productData === undefined){
                console.log("calling fetch Products isnide data conditional")
                setProductData(await getProduct(product.productID))
                
            }

            if(imageUrl === "" && productData !==undefined){
                console.log("calling fetch products inside conditional for image")
                setImageUrl(await getImage(productData?.picture))
                console.log("setting subtotal")
                setSubtotal(subTotal => subTotal + productData.price * product.quantity )
            }
        }
        
        
        fetchProduct()
    },[imageUrl, product.productID, product.quantity, productData, setSubtotal])
    

    


    return(
        
        <TableRow>
            {productData !== undefined
            ?(
                <>
                    <TableCell>
                        <Box display={"flex"} flexDirection={"row"} gap={"56px"} >
                        <Box display={"flex"} flexShrink={0}>
                        {
                            <img style={{width:"48px", height:"48px"}} src={imageUrl} className="picture" alt="loading"></img>
                        }
                        </Box>
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            {productData.productName}
                        </Box>
                        </Box>
                    </TableCell>
                    <TableCell>${productData.price}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>${productData.price * product.quantity}</TableCell>
                </>
            ) 
            :(null)} 
        </TableRow>
    )
}

export default CartItem