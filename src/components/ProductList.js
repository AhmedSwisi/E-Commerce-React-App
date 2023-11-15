import React from "react";
import ShopListItem from "./ShopListItem";

const ProductList = ({products}) => (products.map((product) => <ShopListItem product = {product} />))

export default ProductList