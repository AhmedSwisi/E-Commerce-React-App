import React, {useState, useEffect} from "react";
import { getProducts } from "../firebase/utilities";
import ShopListItem from "./ShopListItem";

const ProductList = ({categoryFilter, priceRangeFilter}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () =>{
            console.log(priceRangeFilter, "this is the range Filter")
            console.log(categoryFilter, "this is the category filter")
            setProducts(await getProducts( categoryFilter, priceRangeFilter ))
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