import React, {useState, useEffect} from "react";
import { getProducts } from "../firebase/utilities";
import ShopListItem from "./ShopListItem";

const ProductList = ({categoryFilter, priceRangeFilter}) => {
    const [products, setProducts] = useState([])
    console.log(categoryFilter)
    console.log(priceRangeFilter)
    useEffect(() => {
        const fetchProducts = async () =>{
            
            console.log("calling Fetch")
            console.log(priceRangeFilter, "this is the range Filter")
            console.log(categoryFilter, "this is the category filter")
            const docs = await getProducts( categoryFilter, priceRangeFilter )
            setProducts(docs)
            
        }
        fetchProducts()
    },[categoryFilter,priceRangeFilter])
return(
    <>
    {products.map((product) => <ShopListItem product = {product} />)}
    </>
)
}

export default ProductList