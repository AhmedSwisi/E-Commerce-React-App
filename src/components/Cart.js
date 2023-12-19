import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Typography } from "@mui/material";
import CartItem from "./CartItem";
import React, {useEffect, useState} from "react";

const Cart = ({cart,setCart, setSubtotal}) => {

    const [products, setProducts] = useState([])

    console.log(cart)

    useEffect(() => {
        if(cart){
            console.log(Object.getOwnPropertyNames(cart), "object names")
            setProducts(Object.getOwnPropertyNames(cart))
        }
    },[cart])

    const columns = [
        {id:"product", label:"Product", minWidth:170},
        {id:"price", label:"Price", minWidth:170},
        {id:"quantity", label:"Quantity", minWidth:170},
        {id:"total", label:"Total", minWidth:170},
    ]

    
    


    return(
        <TableContainer sx={{maxHeight:500}}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            <Typography variant="item_header">
                            {column.label}
                            </Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                {products !== undefined || null ?(<>{products.map((product) => <CartItem product = {product} cart={cart} setSubtotal={setSubtotal} setCart = {setCart} />)} </>):(null)}
                
                
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default Cart